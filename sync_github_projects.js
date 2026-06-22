import fs from 'fs/promises';
import path from 'path';

const GITHUB_USER = 'RithwikMohan';

/**
 * Reads main.js and extracts all GitHub repo URLs already linked in the
 * static PROJECTS_DATA array. This way the exclusion list is always in sync
 * automatically — no manual editing needed.
 */
async function getExistingGitHubLinks() {
  const mainJs = await fs.readFile(path.join(process.cwd(), 'src', 'main.js'), 'utf-8');
  const githubUrls = [...mainJs.matchAll(/github:\s*["'](https:\/\/github\.com\/[^"']+)["']/g)]
    .map(m => m[1].toLowerCase().replace(/\.git$/, ''));
  return githubUrls;
}

// Always skip the portfolio's own repo
const ALWAYS_SKIP = ['portfolio-rithwik', 'rithwikmohan'];

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Portfolio-Sync-Script' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Portfolio-Sync-Script' } });
  if (!res.ok) return null;
  return res.text();
}

function parseReadme(readmeText, repoName) {
  let shortDesc = "A dynamically synced project from GitHub.";
  let techStack = ["GitHub", "JavaScript"];
  let features = [];
  
  if (!readmeText) return { shortDesc, techStack, features };
  
  const lines = readmeText.split('\n');
  let currentSection = '';
  
  for (let line of lines) {
    const lowerLine = line.toLowerCase();
    if (lowerLine.includes('overview') || lowerLine.includes('description') || lowerLine.includes('about')) {
      currentSection = 'desc';
      continue;
    } else if (lowerLine.includes('tech stack') || lowerLine.includes('technologies')) {
      currentSection = 'tech';
      continue;
    } else if (lowerLine.includes('features')) {
      currentSection = 'features';
      continue;
    } else if (line.startsWith('#')) {
      currentSection = '';
    }
    
    if (currentSection === 'desc' && line.trim() !== '') {
      if (shortDesc === "A dynamically synced project from GitHub." && line.trim().length > 20) {
        shortDesc = line.replace(/[*_~`#]/g, '').trim();
      }
    } else if (currentSection === 'tech' && line.trim().startsWith('-')) {
      const tech = line.replace('-', '').replace(/[*_~`]/g, '').trim();
      if (!techStack.includes(tech) && techStack.length < 8 && tech.length < 20) {
        if (techStack[0] === "GitHub") techStack = [];
        techStack.push(tech);
      }
    } else if (currentSection === 'features' && line.trim().startsWith('-')) {
      const feature = line.replace('-', '').replace(/[*_~`]/g, '').trim();
      if (feature.length > 5) {
        features.push({ label: "Feature", detail: feature });
      }
    }
  }
  
  return { shortDesc, techStack, features };
}

async function syncProjects() {
  console.log('Fetching repositories from GitHub...');
  try {
    const existingLinks = await getExistingGitHubLinks();
    console.log(`Found ${existingLinks.length} existing project links to skip.`);
    
    const repos = await fetchJson(`https://api.github.com/users/${GITHUB_USER}/repos?sort=created&direction=asc&per_page=100`);
    const dynamicProjects = [];
    
    for (const repo of repos) {
      const repoUrl = repo.html_url.toLowerCase();
      const normalizedName = repo.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      
      // Skip forks, the portfolio repo itself, and repos already linked in static data
      if (repo.fork) continue;
      if (ALWAYS_SKIP.some(s => normalizedName.includes(s))) continue;
      if (existingLinks.some(link => link.includes(repo.name.toLowerCase()))) continue;
      
      console.log(`Checking ${repo.name} for a preview folder...`);
      try {
        const contents = await fetchJson(`https://api.github.com/repos/${GITHUB_USER}/${repo.name}/contents/preview`);
        if (Array.isArray(contents)) {
          console.log(`✓ Found preview folder in ${repo.name}! Extracting data...`);
          
          const images = contents
            .filter(file => file.name.match(/\.(png|jpe?g|gif)$/i))
            .map(file => file.download_url);
            
          if (images.length === 0) {
            console.log(`  Skipping ${repo.name}: preview/ folder has no images.`);
            continue;
          }
          
          let readme = await fetchText(`https://raw.githubusercontent.com/${GITHUB_USER}/${repo.name}/main/README.md`);
          if (!readme) {
            readme = await fetchText(`https://raw.githubusercontent.com/${GITHUB_USER}/${repo.name}/master/README.md`);
          }
          
          const { shortDesc, techStack, features } = parseReadme(readme, repo.name);
          const projectGalleries = [{ label: "Screenshots", images }];
          const featureGroups = features.length > 0 ? [{
            groupTitle: "✨ Key Features",
            groupColor: "#6C63FF",
            features: features.slice(0, 5)
          }] : [];
          
          dynamicProjects.push({
            id: normalizedName,
            title: repo.name.replace(/[-_]/g, ' '),
            shortDesc,
            longDesc: shortDesc,
            techStack,
            bannerEmoji: "💻",
            category: "fullstack",
            projectGalleries,
            usp: repo.description || "A project synced from GitHub.",
            featureGroups,
            highlights: features.slice(0, 4).map(f => `<strong>Feature</strong>: ${f.detail}`),
            links: {
              github: repo.html_url,
              demo: repo.homepage || "#"
            }
          });
        }
      } catch (e) {
        if (!e.message.includes('404')) {
           console.warn(`  Warning: Error checking ${repo.name}: ${e.message}`);
        }
      }
    }
    
    console.log(`\nSync complete! Found ${dynamicProjects.length} new dynamic project(s).`);
    await fs.writeFile(
      path.join(process.cwd(), 'src', 'dynamic_projects.json'),
      JSON.stringify(dynamicProjects, null, 2)
    );
    console.log('✓ Written to src/dynamic_projects.json');
    
    if (dynamicProjects.length > 0) {
      console.log('\nProjects added:');
      dynamicProjects.forEach(p => console.log(`  - ${p.title}`));
    } else {
      console.log('\nNo new repos with a preview/ folder found.');
      console.log('Tip: To show a repo in your portfolio, add a preview/ folder with screenshots to that GitHub repo, then re-run `npm run sync-projects`.');
    }
  } catch (error) {
    console.error('Failed to sync GitHub projects:', error.message);
  }
}

syncProjects();
