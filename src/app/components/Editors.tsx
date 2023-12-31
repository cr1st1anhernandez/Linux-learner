import { EditorCode } from '@/app/components/EditorCode'

export function EditorVariable(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash
# Definir una variable
nombre="Cristian"

# Acceder a una variable
echo "Hola, $nombre"`}
    />
  )
}

export function EditorExample(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash

# Pedir al usuario las carpetas de origen y destino
read -p "Ingrese la carpeta de origen: " origen
read -p "Ingrese la carpeta de destino: " destino

# Verificar si la carpeta de destino existe, si no, crearla
if [ ! -d "$destino" ]; then
  mkdir -p "$destino"
  echo "Carpeta de destino creada."
fi

# Preguntar al usuario si desea sobrescribir archivos
read -p "¿Desea sobrescribir archivos existentes? (Sí/No): " sobrescribir

# Copiar archivos
if [ "$sobrescribir" == "Sí" ] || [ "$sobrescribir" == "sí" ]; then
  cp -r "$origen"/* "$destino"
  echo "Archivos copiados (con sobrescritura)."
else
  cp -rn "$origen"/* "$destino"
  echo "Archivos copiados (sin sobrescritura)."
fi

echo "Operación completada con éxito."

`}
    />
  )
}

export function EditorExercise(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash

# Este script busca y reemplaza una palabra en varios archivos en un directorio

# Directorio que contiene los archivos
directorio="/ruta/al/directorio"

# Palabra a buscar y reemplazar
palabra_buscar="antigua_palabra"
palabra_reemplazar="nueva_palabra"

# Iterar sobre todos los archivos en el directorio
for archivo in "$directorio"/*; do
  if [ -f "$archivo" ]; then
    # Realizar el reemplazo de la palabra en el archivo
    sed -i "s/$palabra_buscar/$palabra_reemplazar/g" "$archivo"
    echo "Reemplazando en el archivo: $archivo"
  fi
done

echo "¡Proceso completado!"`}
    />
  )
}

export function EditorConditional(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash

# Declaración de variables
edad=25


# Ejemplo de declaración if-else
if [ $edad -ge 18 ]; then
    echo "Eres mayor de edad."
else
    echo "Eres menor de edad."
fi
`}
    />
  )
}

export function EditorLoop(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash
# Ejemplo de bucle for
for i in {1..5}; do
    echo "Iteración $i"
done
# Ejemplo de bucle while
contador=0
while [ $contador -lt 5 ]; do
    echo "Iteración $contador"
    contador=$((contador+1))
done`}
    />
  )
}

export function EditorUtilCommands(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash

# Mostrar la fecha y hora actual
echo "Fecha y hora actual: $(date)"
# Buscar texto en archivos
echo "Buscar 'patron' en archivo:"
grep "patron" archivo.txt
# Mostrar información del sistema
echo "Información del sistema:"
uname -a
    `}
    />
  )
}

export function EditorFunction(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash

# Definir una función
saludar():JSX.Element {
    echo "Hola, $1"
}

# Llamar a la función
saludar "Juan"

`}
    />
  )
}

export function EditorParameters(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash

# Acceder a los parámetros del script
echo "Primer parámetro: $1"
echo "Segundo parámetro: $2"
`}
    />
  )
}

export function EditorInputUser(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash
# Leer entrada del usuario
echo "¿Cuál es tu nombre?"
read nombre
echo "Hola, $nombre"`}
    />
  )
}

export function EditorFilesAndDirectories(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash
# Verificar si un archivo existe
if [ -e archivo.txt ]; then
    echo "El archivo existe."
else
    echo "El archivo no existe."
fi

# Crear un directorio
mkdir nuevo_directorio
# Mover un archivo o directorio
mv archivo.txt nuevo_directorio/
# Eliminar un archivo
rm archivo.txt
`}
    />
  )
}

export function EditorEnvironmentVariable(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`#!/bin/bash

# Acceder a una variable de entorno
echo "El directorio de inicio es: $HOME"
`}
    />
  )
}

export function EditorExternalCommand(): JSX.Element {
  return (
    <EditorCode
      header="bash"
      icon="devicon=-plain:bash"
      text={`
#!/bin/bash
# Ejecutar un comando externo
resultado=$(ls -l)
echo "Lista de archivos: $resultado"`}
    />
  )
}
