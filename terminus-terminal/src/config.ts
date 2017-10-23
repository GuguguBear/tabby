import { ConfigProvider, Platform } from 'terminus-core'

export class TerminalConfigProvider extends ConfigProvider {
    defaults = {
        terminal: {
            autoOpen: false,
            fontSize: 14,
            linePadding: 0,
            bell: 'off',
            bracketedPaste: false,
            background: 'theme',
            ligatures: false,
            cursor: 'block',
            cursorBlink: true,
            customShell: '',
            workingDirectory: '',
            colorScheme: {
                __nonStructural: true,
                name: 'Material',
                foreground: '#eceff1',
                background: 'rgba(38, 50, 56, 1)',
                cursor: '#FFCC00',
                colors: [
                    '#000000',
                    '#D62341',
                    '#9ECE58',
                    '#FAED70',
                    '#396FE2',
                    '#BB80B3',
                    '#2DDAFD',
                    '#d0d0d0',
                    'rgba(255, 255, 255, 0.2)',
                    '#FF5370',
                    '#C3E88D',
                    '#FFCB6B',
                    '#82AAFF',
                    '#C792EA',
                    '#89DDFF',
                    '#ffffff',
                ]
            },
            customColorSchemes: []
        },
    }

    platformDefaults = {
        [Platform.macOS]: {
            terminal: {
                font: 'Menlo',
                shell: 'default',
                persistence: 'screen',
            },
            hotkeys: {
                'copy': [
                    '⌘-C',
                ],
                'clear': [
                    '⌘-K',
                ],
                'zoom-in': [
                    '⌘-=',
                    '⌘-Shift-+',
                ],
                'zoom-out': [
                    '⌘--',
                    '⌘-Shift-_',
                ],
                'reset-zoom': [
                    '⌘-0',
                ],
                'new-tab': [
                    ['Ctrl-A', 'C'],
                    ['Ctrl-A', 'Ctrl-C'],
                    '⌘-T',
                    '⌘-N',
                ]
            },
        },
        [Platform.Windows]: {
            terminal: {
                font: 'Consolas',
                shell: 'clink',
                persistence: null,
            },
            hotkeys: {
                'copy': [
                    'Ctrl-Shift-C',
                ],
                'clear': [
                    'Ctrl-L',
                ],
                'zoom-in': [
                    'Ctrl-=',
                    'Ctrl-Shift-+',
                ],
                'zoom-out': [
                    'Ctrl--',
                    'Ctrl-Shift-_',
                ],
                'reset-zoom': [
                    'Ctrl-0',
                ],
                'new-tab': [
                    ['Ctrl-A', 'C'],
                    ['Ctrl-A', 'Ctrl-C'],
                    'Ctrl-Shift-T',
                ]
            },
        },
        [Platform.Linux]: {
            terminal: {
                font: 'Liberation Mono',
                shell: 'default',
                persistence: 'tmux',
            },
            hotkeys: {
                'copy': [
                    'Ctrl-Shift-C',
                ],
                'clear': [
                    'Ctrl-L',
                ],
                'zoom-in': [
                    'Ctrl-=',
                    'Ctrl-Shift-+',
                ],
                'zoom-out': [
                    'Ctrl--',
                    'Ctrl-Shift-_',
                ],
                'reset-zoom': [
                    'Ctrl-0',
                ],
                'new-tab': [
                    ['Ctrl-A', 'C'],
                    ['Ctrl-A', 'Ctrl-C'],
                    'Ctrl-Shift-T',
                ]
            },
        },
    }
}
