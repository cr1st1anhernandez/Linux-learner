export const linesExercise = [
    {
      prompt: '',
      command: 'cd Documentos',
      output: '',
    },
    {
      prompt: 'Documentos',
      command: 'mkdir practica',
      output: '',
    },
    {
      prompt: 'Documentos',
      command: 'cd practica',
      output: '',
    },
    {
      prompt: 'Documentos/practica',
      command: 'touch linux.txt comandos.txt index.html',
      output: '',
    },
    {
      prompt: 'Documentos/practica',
      command: 'ls',
      output: 'comandos.txt linux.txt index.html',
    },
    {
      prompt: 'Documentos/practica',
      command: 'cat linux.txt',
      output: 'Estoy aprendiendo linux',
    },
    {
      prompt: 'Documentos/practica',
      command: 'mv comandos.txt comandos-linux.txt',
      output: '',
    },
    {
      prompt: 'Documentos/practica',
      command: 'cp practica.txt practica_backup.txt',
      output: '',
    },
    {
      prompt: 'Documentos/practica',
      command: 'nano practica.txt',
      output: '',
    },
    {
      prompt: 'Documentos/practica',
      command: 'diff practica.txt practica_backup.txt',
      output: '1d0 < test',
    },
    {
      prompt: 'Documentos/practica',
      command: 'rm index.html',
      output: '',
    },
    {
      prompt: 'Documentos/practica',
      command: 'ls',
      output: '',
    },
    {
      prompt: 'Documentos/practica',
      command: 'rm -r *',
      output: '',
    },
    {
      prompt: 'Documentos/practica',
      command: 'rm -r ../practica',
      output: '',
    },
  ]

export const linesExample = [
    {
      prompt: '',
      command: 'pwd',
      output: '/home/nombre',
    },
    {
      prompt: '',
      command: 'cd Descargas',
      output: '',
    },
    {
      prompt: 'Descargas',
      command: 'mkdir archivos',
      output: '',
    },
    {
      prompt: 'Descargas',
      command: 'cd archivos/',
      output: '',
    },
    {
      prompt: 'Descargas/archivos',
      command: 'touch archivo1.txt archivo2.txt archivo3.txt',
      output: '',
    },
    {
      prompt: 'Descargas/archivos',
      command: 'ls',
      output: 'archivo1.txt archivo2.txt archivo3.txt',
    },
    {
      prompt: 'Descargas/archivos',
      command: 'rm -r *',
      output: '',
    },
    {
      prompt: 'Descargas/archivos',
      command: 'cd ..',
      output: '',
    },
    {
      prompt: 'Descargas',
      command: 'rm -r archivos',
      output: '',
    },
  ]