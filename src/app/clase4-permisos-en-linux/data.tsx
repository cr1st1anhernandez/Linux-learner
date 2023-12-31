export const linesExercise1 = [
  {
    prompt: '',
    command: 'touch mi_script.sh',
    output: '',
  },
  {
    prompt: '',
    command: 'nano mi_script.sh',
    output: '',
  },
  {
    prompt: '',
    command: './mi_script.sh',
    output: 'bash: ./mi_script.sh: Permiso denegado',
  },
  {
    prompt: '',
    command: 'chmod +x mi_script.sh',
    output: '',
  },
  {
    prompt: '',
    command: './mi_script.sh',
    output: '!Hola, este es mi script!',
  },
]

export const linesExercise2 = [
  {
    prompt: '',
    command: 'sudo groupadd estudiantes',
    output: '',
  },
  {
    prompt: '',
    command: 'sudo useradd estudiante1',
    output: '',
  },
  {
    prompt: '',
    command: 'sudo usermod -a -G estudiantes estudiante1',
    output: '',
  },
  {
    prompt: '',
    command: 'sudo id -nG estudiante1',
    output: 'estudiante1 estudiantes',
  },
  {
    prompt: '',
    command: 'sudo usermod -G estudiantes estudiante1',
    output: '',
  },
  {
    prompt: '',
    command: 'sudo userdel estudiante1',
    output: '',
  },
]
