# Floating Sticky Note Widget

A floating sticky note application built with Electron that stays on top of all windows.

## Features

- ✅ Always on top - stays visible above all other windows
- ✅ Translucent/frameless design - clean, minimal interface
- ✅ Editable on click - just click and type
- ✅ Draggable - drag by the header to move around
- ✅ Resizable - resize by dragging corners/edges
- ✅ Auto-save - your notes are automatically saved
- ✅ Position persistence - remembers where you left it
- ✅ Keyboard shortcuts - Ctrl+W / Cmd+W to close

## Setup

1. **Install Node.js** (if you haven't already)
   - Download from [nodejs.org](https://nodejs.org/)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```

## Usage

- **Type**: Click on the textarea and start typing
- **Move**: Click and drag the header (top bar) to move the note
- **Resize**: Drag the corners or edges of the window
- **Close**: Click the × button or press Ctrl+W (Cmd+W on Mac)

## Files

- `main.js` - Electron main process (window management)
- `index.html` - UI and styling
- `package.json` - Project configuration and dependencies

## Notes

- Your text is automatically saved to browser localStorage
- Window position is saved to your user data directory
- The note will remember its size and position when you restart

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
