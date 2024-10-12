from flask import Flask, request, send_file
from flask_cors import CORS
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph
from io import BytesIO

app = Flask(__name__)
CORS(app)

@app.route('/api/generate-contract', methods=['POST'])
def generate_contract():
    data = request.json
    
    buffer = BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=letter)
    styles = getSampleStyleSheet()
    
    story = []
    
    story.append(Paragraph("Contract Agreement", styles['Title']))
    story.append(Paragraph(f"Client Name: {data['clientName']}", styles['Normal']))
    story.append(Paragraph(f"Project Name: {data['projectName']}", styles['Normal']))
    story.append(Paragraph(f"Start Date: {data['startDate']}", styles['Normal']))
    story.append(Paragraph(f"End Date: {data['endDate']}", styles['Normal']))
    story.append(Paragraph("Project Description:", styles['Heading2']))
    story.append(Paragraph(data['description'], styles['Normal']))
    
    doc.build(story)
    buffer.seek(0)
    
    return send_file(buffer, as_attachment=True, download_name='contract.pdf', mimetype='application/pdf')

if __name__ == '__main__':
    app.run(debug=True, port=5000)