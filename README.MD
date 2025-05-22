# Webpack Project

This is a Webpack-based project configured to meet specific requirements, including file name hashing, local font support, image processing, CSS integration, and optimization of external libraries. The project includes scripts to automate the creation of the folder structure and basic files.

## Project Structure

webpack-project/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── Roboto-Regular.ttf
│   │   ├── images/
│   │   │   └── image.png
│   ├── styles/
│   │   └── main.css
│   ├── index.html
│   ├── index.js
├── create-folders.ps1
├── run-create-folders.sh
├── package.json
├── webpack.config.js
└── README.md



## Features

- **File Name Hashing**: Output files (JavaScript, images, fonts) include content-based hashes to prevent browser caching issues.
- **Local Fonts**: Supports custom fonts (e.g., Roboto) loaded via CSS.
- **Image Processing**: Handles images (e.g., PNG, JPG) with hashed file names in the output bundle.
- **CSS Integration**: Processes and bundles CSS styles.
- **External Library Optimization**: Splits external libraries (e.g., lodash) into separate chunks for better performance.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- PowerShell (for running create-folders.ps1 on Windows, or PowerShell Core on Linux/MacOS)
- Git (for version control)

## Setup Instructions

### 1. Create Project Structure
Use the provided scripts to create the necessary folders and initial files.

#### Using PowerShell (Windows)
Run the `create-folders.ps1` script to set up the folder structure (src, src/assets, etc.) and create initial files (index.js, index.html, style.css):

- Open a terminal in the project root.
- Run: `powershell.exe -ExecutionPolicy Bypass -File ./create-folders.ps1`

#### Using Shell (Linux/MacOS/Windows with Bash)
Run the `run-create-folders.sh` script to execute the PowerShell script:

- Open a terminal in the project root.
- Run: `sh run-create-folders.sh`

**Note**: Ensure PowerShell is installed:
- Windows: PowerShell is included by default.
- Linux/MacOS: Install PowerShell Core by following the instructions at Microsoft's PowerShell documentation (https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell).
- If you see errors like "command not found," verify that `powershell.exe` or `pwsh` is in your terminal's PATH.

**Troubleshooting**:
- If the script fails with a permission error, grant execution permissions: `chmod +x run-create-folders.sh`.
- Ensure `create-folders.ps1` is in the project root.
- If PowerShell is unavailable, manually create the folder structure (src, src/assets, src/assets/fonts, src/assets/images, src/styles) and files (index.js, index.html, style.css).

### 2. Install Dependencies
Initialize the Node.js project and install required dependencies:

- Run: `npm init -y`
- Run: `npm install --save-dev webpack webpack-cli webpack-dev-server css-loader style-loader file-loader html-webpack-plugin clean-webpack-plugin copy-webpack-plugin`
- Run: `npm install lodash`

### 3. Update Project Files
Update the generated files to match the project requirements:
- **index.html**: Create an HTML file with a title, meta tags, and a heading.
- **index.js**: Import the CSS file, lodash, and an image, then dynamically add the image to the DOM.
- **main.css**: Define a custom font (Roboto) and basic styles for the body and heading.
- **Assets**: Place a font file (e.g., Roboto-Regular.ttf) in src/assets/fonts/ and an image (e.g., image.png) in src/assets/images/. Download the font from Google Fonts (https://fonts.google.com/).

### 4. Configure Webpack
Create or update `webpack.config.js` to include:
- Development mode.
- Entry point set to index.js.
- Output with hashed file names in the dist/ folder.
- Rules for processing CSS, fonts, and images.
- Plugins for generating HTML, cleaning the dist/ folder, and copying static assets.
- Development server configuration (port 9000).
- Optimization for splitting external libraries.

### 5. Update package.json Scripts
Add the following scripts to package.json:
- `start`: Runs the development server and opens the browser.
- `build`: Creates a production build with hashed file names.

### 6. Run the Project
- **Development**: Start the development server:
  - Run: `npm start`
  - The project will open in your browser at http://localhost:9000.
- **Production Build**: Create a production build:
  - Run: `npm run build`
  - The output will be in the dist/ folder with hashed file names.

### 7. Push to GitHub
1. Initialize Git:
   - Run: `git init`
2. Create `.gitignore` in the project root with:
   - node_modules
   - dist
3. Commit changes:
   - Run: `git add .`
   - Run: `git commit -m "Initial Webpack project setup"`
4. Create a GitHub repository and push:
   - Run: `git remote add origin <your-repository-url>`
   - Run: `git push -u origin main`

## Troubleshooting
- **Image not appearing**: Ensure the image file exists in src/assets/images/. Check the browser console (F12) for 404 errors.
- **Font not loading**: Verify the font file is in src/assets/fonts/ and the CSS path is correct.
- **Build errors**: Run `npm install` to ensure all dependencies are installed.
- **Script errors**: If `run-create-folders.sh` fails:
  - Check that `create-folders.ps1` exists.
  - Verify PowerShell is installed and accessible via `powershell.exe` or `pwsh`.
  - Check script permissions: `ls -l run-create-folders.sh` and run `chmod +x run-create-folders.sh` if needed.

## Requirements Fulfillment
- **File Name Hashing**: Hashes are added to JavaScript, image, and font file names to prevent caching issues.
- **Local Fonts**: Custom fonts are loaded via CSS and processed by Webpack.
- **Image Processing**: Images are bundled with hashed names.
- **CSS Integration**: CSS styles are processed and injected into the page.
- **External Library Optimization**: External libraries are split into separate chunks for better performance.

## License
MIT