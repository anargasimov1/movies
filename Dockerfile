# Node.js 18 image istifadə olunur
FROM node:22

# İş qovluğunu təyin edirik
WORKDIR /app

# package.json və package-lock.json kopyalanır
COPY package*.json ./

# Bağımlılıqları yükləyirik
RUN npm install

# Layihə fayllarını konteynerə kopyalayırıq
COPY . .

# Server portu
EXPOSE 3000

# Proqramı işə salır
CMD ["node", "index.js"]
