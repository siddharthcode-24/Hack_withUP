# 🔭 Astro Insight Agent

An AI-powered astronomical image analysis tool with an intuitive web interface for analyzing celestial images.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- **📤 Image Upload**: Drag-and-drop or click to upload astronomical images
- **🖼️ Live Preview**: Real-time image preview before analysis
- **🤖 AI Analysis**: Simulated AI-powered image analysis with detailed insights
- **📊 Detailed Reports**: Comprehensive analysis including:
  - Image quality assessment
  - Detected celestial features
  - Technical observations
  - Professional recommendations
- **🎨 Modern UI**: Clean, GitHub-inspired dark theme interface
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code (optional, for development)
- Live Server extension (optional, for local testing)

### Installation

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/yourusername/astro-insight-agent.git
   cd astro-insight-agent
   ```

2. **File Structure**
   ```
   project-folder/
   ├── index.html              # Main homepage
   ├── astro-insight.html      # Astro Insight Agent page
   └── README.md               # This file
   ```

3. **Open in Browser**
   - **Option A**: Double-click `astro-insight.html` to open in browser
   - **Option B**: Use VS Code with Live Server
     - Right-click on `astro-insight.html`
     - Select "Open with Live Server"
   - **Option C**: Use Python's built-in server
     ```bash
     python -m http.server 8000
     # Visit: http://localhost:8000/astro-insight.html
     ```

## 📖 Usage

### Step 1: Upload Image
1. Click the upload area or drag-and-drop an image file
2. Supported formats: JPEG, PNG, FITS
3. Image preview appears instantly

### Step 2: Analyze
1. Click the "Analyze Image" button
2. Wait for analysis to complete (2-3 seconds)
3. View detailed insights in the right panel

### Step 3: Review Results
The analysis provides:
- **Image Analysis**: Overall assessment of the uploaded image
- **Detected Features**: Celestial objects and patterns identified
- **Technical Observations**: Image quality and technical metrics
- **Recommendations**: Suggestions for further analysis

## 🔧 Integration with Main Website

### Method 1: Direct Link
Add to your `index.html`:

```html
<a href="astro-insight.html" class="tool-link">
    🔭 Launch Astro Insight Agent
</a>
```

### Method 2: Navigation Menu
```html
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="astro-insight.html">Astro Insight</a></li>
    </ul>
</nav>
```

### Method 3: Feature Card
```html
<div class="feature-card">
    <h3>🔭 Astro Insight Agent</h3>
    <p>Analyze astronomical images with AI</p>
    <a href="astro-insight.html" class="btn">Try Now</a>
</div>
```

## 🎨 Customization

### Change Colors
Edit the CSS variables in `astro-insight.html`:

```css
/* Background colors */
#0d1117  /* Main background */
#161b22  /* Card background */
#238636  /* Primary button (green) */

/* Text colors */
#ffffff  /* Primary text */
#c9d1d9  /* Secondary text */
#8b949e  /* Gray text */
```

### Modify Analysis Prompt
Find and edit the system prompt in the HTML:

```javascript
const prompt = "You are an expert astronomical data analyst...";
```

### Adjust Loading Time
Change the analysis delay (in milliseconds):

```javascript
setTimeout(() => {
    analyzeImage();
}, 2000); // Change 2000 to desired delay
```

## 🔌 API Integration (Future Enhancement)

To connect with a real AI API:

### Using Claude API
```javascript
async function analyzeImage() {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'YOUR_API_KEY'
        },
        body: JSON.stringify({
            model: 'claude-3-sonnet-20240229',
            messages: [{
                role: 'user',
                content: [
                    {
                        type: 'image',
                        source: {
                            type: 'base64',
                            media_type: 'image/jpeg',
                            data: currentImage.split(',')[1]
                        }
                    },
                    {
                        type: 'text',
                        text: 'Analyze this astronomical image...'
                    }
                ]
            }]
        })
    });
    const data = await response.json();
    displayResults(data);
}
```

### Using OpenAI Vision API
```javascript
async function analyzeImage() {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            model: 'gpt-4-vision-preview',
            messages: [{
                role: 'user',
                content: [
                    { type: 'text', text: 'Analyze this astronomical image' },
                    { type: 'image_url', image_url: { url: currentImage } }
                ]
            }]
        })
    });
    const data = await response.json();
    displayResults(data);
}
```

## 🐛 Troubleshooting

### Image not uploading?
- Check file format (JPEG, PNG, FITS only)
- Ensure file size is reasonable (< 10MB recommended)
- Try a different browser

### Preview not showing?
- Clear browser cache
- Check browser console for errors (F12)
- Verify image file is not corrupted

### Analysis not working?
- Ensure JavaScript is enabled in browser
- Check console for error messages
- Try refreshing the page

## 📝 Technical Details

### Technologies Used
- **HTML5**: Structure and file input
- **CSS3**: Styling with modern features
- **Vanilla JavaScript**: No dependencies required
- **FileReader API**: For image preview
- **Drag and Drop API**: For file uploads

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Performance
- Lightweight: < 10KB total size
- Fast loading: No external dependencies
- Responsive: Works on all screen sizes

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Astro Insight Agent

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Inspired by modern astronomical research tools
- UI design based on GitHub's interface
- Icons and styling inspired by modern web design trends

## 📚 Resources

- [Astronomy Image Processing](https://www.astrobin.com/)
- [FITS File Format](https://fits.gsfc.nasa.gov/)
- [FileReader API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)

## 🗺️ Roadmap

- [ ] Real AI API integration (Claude/OpenAI/Google Vision)
- [ ] FITS file parsing and visualization
- [ ] Export analysis reports to PDF
- [ ] Image enhancement tools
- [ ] Star catalog cross-referencing
- [ ] Multi-image batch processing
- [ ] User accounts and saved analyses
- [ ] Advanced astronomical calculations
- [ ] 3D visualization of celestial objects

## 📞 Support

Having issues? Here's how to get help:

1. Check the [Issues](https://github.com/yourusername/astro-insight-agent/issues) page
2. Create a new issue with detailed description
3. Contact via email: support@example.com

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Made with ❤️ for astronomy enthusiasts and researchers**