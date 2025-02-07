# Usa la imagen oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package.json package-lock.json ./

# Instala solo las dependencias de producción
#RUN npm install --production
RUN npm install

# Copia el resto del código
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Expone el puerto en el que Next.js correrá
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["npm", "run", "start", "--", "-p", "3001"]
