import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.data('cheatsheet', () => ({
  search: '',
  // Comprehensive industry dataset of Vim essentials
  commands: [
    // Cursor Movement
    { key: 'h', action: 'Move cursor left one character', category: 'Navigation' },
    { key: 'j', action: 'Move cursor down one line', category: 'Navigation' },
    { key: 'k', action: 'Move cursor up one line', category: 'Navigation' },
    { key: 'l', action: 'Move cursor right one character', category: 'Navigation' },
    { key: 'w', action: 'Jump forward to the start of the next word', category: 'Navigation' },
    { key: 'b', action: 'Jump backward to the start of the previous word', category: 'Navigation' },
    { key: '0', action: 'Move cursor directly to the start of the current line', category: 'Navigation' },
    { key: '$', action: 'Move cursor directly to the end of the current line', category: 'Navigation' },
    { key: 'gg', action: 'Go straight to the very first line of the file', category: 'Navigation' },
    { key: 'G', action: 'Go straight to the very last line of the file', category: 'Navigation' },

    // Editing Modes & Modification
    { key: 'i', action: 'Enter Insert mode before the cursor location', category: 'Editing' },
    { key: 'a', action: 'Enter Insert mode after the cursor location (Append)', category: 'Editing' },
    { key: 'o', action: 'Open a fresh new line right below the current line', category: 'Editing' },
    { key: 'O', action: 'Open a fresh new line right above the current line', category: 'Editing' },
    { key: 'Esc', action: 'Exit current mode and return cleanly to Normal mode', category: 'Editing' },
    { key: 'x', action: 'Delete the specific character directly under the cursor', category: 'Editing' },
    { key: 'dd', action: 'Delete (cut) the entire current line from the file', category: 'Editing' },
    { key: 'yy', action: 'Copy (yank) the entire current line into memory buffer', category: 'Editing' },
    { key: 'p', action: 'Paste the copied/cut text buffer content after cursor', category: 'Editing' },
    { key: 'u', action: 'Undo the last modification step taken', category: 'Editing' },
    { key: 'Ctrl + r', action: 'Redo the last modification step that was undone', category: 'Editing' },

    // File Actions & Session Exits
    { key: ':w', action: 'Write changes (save the current file configuration)', category: 'File System' },
    { key: ':q', action: 'Quit Vim session (fails if there are unsaved changes)', category: 'File System' },
    { key: ':wq', action: 'Write changes and exit the file session immediately', category: 'File System' },
    { key: ':q!', action: 'Force quit immediately, completely discarding all unsaved edits', category: 'File System' }
  ],

  // Power-User Global Layout Event Hook
  init() {
    window.addEventListener('keydown', (e) => {
      // Instantly focus search field if '/' is hit outside an active input frame
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        this.$refs.searchInput.focus();
      }
      // Instantly clear field values if 'Escape' is tapped while text is filled
      if (e.key === 'Escape' && document.activeElement === this.$refs.searchInput) {
        this.search = '';
        this.$refs.searchInput.blur();
      }
    });
  },

  // Computed state filtering utility
  get filteredCommands() {
    if (!this.search.trim()) return this.commands;
    const query = this.search.toLowerCase().trim();
    return this.commands.filter(cmd => 
      cmd.key.toLowerCase().includes(query) || 
      cmd.action.toLowerCase().includes(query) ||
      cmd.category.toLowerCase().includes(query)
    );
  }
}));

Alpine.start();
