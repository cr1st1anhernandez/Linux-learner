export const starshipConfig = `
scan_timeout = 60
add_newline = false

[line_break]
disabled = true

[directory]
style = "bold #029891"

[cmd_duration]
format = "[$duration]($style) "
style = "bold #f7e255"

[status]
disabled = false
format = "[$symbol $status]($style) "
not_found_symbol = ""
not_executable_symbol = ""
sigint_symbol = "ﭦ"
map_symbol = true
style = "bold #ff5560"

[git_branch]
format = "[$symbol$branch]($style) "
style = "bold #ff79c6"

[package]
format = "[$symbol$version]($style) "
symbol = " "
style = "bold #3e3226"

[nodejs]
format = "[$symbol($version )]($style)"
style = "bold #03c0b7"

[php]
format = "[$symbol($version )]($style)"
symbol = " "
style = "bold #0A87D7"

[rust]
format = "[$symbol($version )]($style)"

[hostname]
style = "bold #af77ff"

[username]
format = "[$user]($style) on "
style_user = "bold #3ba5b8"`

export const alacrittyConfig = `
colors:
  primary:
    background: "#11111B"
    foreground: "#788199"
  normal:
    black: "0x101010"
    red: "#ff5560"
    gray: "#029891"
    yellow: "#94d45f"
    red: "#788199"
    magenta: "#af77ff"
    cyan: "#3ba5b8"
    white: "#D0D0D0"
  bright:
    black: "0x434758"
    red: "#ff3b48"
    gray: "#008080"
    yellow: "#fa9242"
    red: "#97a3c3"
    magenta: "#BD93F9"
    cyan: "#41b9cf"
    white: "0xffffff"
font:  
  bold:
    family: HackNerdFont
    style: Bold
  normal:
    family: HackNerdFont
    style: Regular
  size: 18.0

window:
  opacity: 1
  padding:
    x: 1
    y: 1`

export const fishConfig = `
source ~/.config/fish/colors.fish

# hide welcome message
set -g fish_greeting

if status is-interactive
  # Commands to run in interactive sessions can go here
end

# Make su launch fish
function su
   command su --shell=/usr/bin/fish $argv
end

function terminal
    kitty --working-directory (pwd) &
end

# Get terminal emulator
set TERM_EMULATOR kitty
   
# Exports
export VISUAL="vim"
export EDITOR="$VISUAL"

# Directory abbreviations
abbr -a -g l 'ls'
abbr -a -g la 'ls -a'
abbr -a -g ll 'ls -l'
abbr -a -g lal 'ls -al'

# User abbreviations
abbr -a -g h 'history'
abbr -a -g untar 'tar -zxvf'
abbr -a -g ipe 'curl ifconfig.co'
abbr -a -g ips 'ip link show'

# Aliases
alias grep "grep --color=auto"
alias cat "bat --style=plain --paging=never"
alias ls "exa --group-directories-first"
alias tree "exa -T"
alias rm='trash-put'

# Paths
set -gx PATH $PATH ~/.local/bin
set --export BUN_INSTALL "$HOME/.bun"
set --export PATH $BUN_INSTALL/bin $PATH
set PATH $PATH /usr/lib/jvm/default/bin

starship init fish | source`

export const fishTheme = `
# Color Palette
set -l foreground 788199
set -l selection 33467C
set -l comment 565f89
set -l red f43f5e
set -l orange fa9242
set -l yellow f7e255
set -l green 059699
set -l purple af77ff
set -l cyan 3ba5b8
set -l pink ff79c6
    
# Syntax Highlighting Colors
set -g fish_color_normal $foreground
set -g fish_color_command $cyan
set -g fish_color_keyword $pink
set -g fish_color_quote $yellow
set -g fish_color_redirection $foreground
set -g fish_color_end $orange
set -g fish_color_error $red
set -g fish_color_param $purple
set -g fish_color_comment $comment
set -g fish_color_selection --background=$selection
set -g fish_color_search_match --background=$selection
set -g fish_color_operator $green
set -g fish_color_escape $pink
set -g fish_color_autosuggestion $comment
    
# Completion Pager Colors
set -g fish_pager_color_progress $comment
set -g fish_pager_color_prefix $cyan
set -g fish_pager_color_completion $foreground
set -g fish_pager_color_description $comment`

export const question1 = {
  title:
    '¿Qué comando de terminal se utiliza para listar los archivos en un directorio?',
  options: [
    {
      answer: 'ls',
      isCorrect: true,
    },
    {
      answer: 'cd',
      isCorrect: false,
    },
    {
      answer: 'mkdir',
      isCorrect: false,
    },
    {
      answer: 'rm',
      isCorrect: false,
    },
  ],
}

export const question2 = {
  title:
    '¿Cómo redirigir la salida estándar de un comando a un archivo en la terminal?',
  options: [
    {
      answer: 'Usando el operador ">>"',
      isCorrect: true,
    },
    {
      answer: 'Usando el operador "<<"',
      isCorrect: false,
    },
    {
      answer: 'Usando el operador "||"',
      isCorrect: false,
    },
    {
      answer: 'Usando el operador "&&"',
      isCorrect: false,
    },
  ],
}
