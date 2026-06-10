import fitz
import os
import glob

cert_dir = r"d:\portfolio-rithwik\public\certificates"
# make.com is likely a PDF missing extension
if os.path.exists(os.path.join(cert_dir, "make.com")):
    os.rename(os.path.join(cert_dir, "make.com"), os.path.join(cert_dir, "make.com.pdf"))

pdf_files = glob.glob(os.path.join(cert_dir, "*.pdf"))

for pdf in pdf_files:
    try:
        doc = fitz.open(pdf)
        # Just grab the first page
        page = doc[0]
        pix = page.get_pixmap(dpi=150)
        out_path = pdf.replace(".pdf", ".png")
        pix.save(out_path)
        print(f"Converted {os.path.basename(pdf)} -> {os.path.basename(out_path)}")
    except Exception as e:
        print(f"Error converting {pdf}: {e}")
