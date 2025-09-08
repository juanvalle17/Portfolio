# Mi Portfolio - Astro + Tailwind CSS

Un portfolio moderno y responsive construido con **Astro** y **Tailwind CSS**.

## 🚀 Características

- ⚡ **Astro** - Framework web moderno y rápido
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 📱 **Responsive** - Diseño adaptativo para todos los dispositivos
- 🎯 **Performance** - Optimizado para velocidad y SEO
- 🔧 **Configurable** - Fácil personalización y extensión

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <tu-repositorio>
   cd mi-portfolio
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

## 🚀 Desarrollo

**Inicia el servidor de desarrollo:**
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:4321`

## 📦 Build

**Construye para producción:**
```bash
npm run build
```

**Previsualiza el build:**
```bash
npm run preview
```

## 🎨 Personalización

### Colores
Los colores personalizados están definidos en `tailwind.config.mjs`:
- `primary-*` - Colores principales del tema
- `secondary-*` - Colores secundarios

### Fuentes
- `font-sans` - Inter (principal)
- `font-mono` - JetBrains Mono (código)

### Animaciones
- `animate-fade-in` - Fade in suave
- `animate-slide-up` - Slide up desde abajo
- `animate-bounce-gentle` - Bounce suave

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── layouts/        # Layouts de página
├── pages/          # Páginas del sitio
├── styles/         # Estilos globales
└── assets/         # Imágenes y recursos
```

## 🎯 Uso de Tailwind CSS

Este proyecto incluye Tailwind CSS v4 con configuración personalizada. Puedes usar todas las clases de Tailwind estándar más las personalizadas:

```html
<!-- Clases estándar -->
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Botón azul
</div>

<!-- Clases personalizadas -->
<div class="bg-primary-600 text-white p-4 rounded-lg animate-fade-in">
  Botón con color personalizado y animación
</div>
```

## 📚 Recursos Útiles

- [Documentación de Astro](https://docs.astro.build/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Componentes de Tailwind UI](https://tailwindui.com/)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

¡Disfruta construyendo tu portfolio con Astro y Tailwind CSS! 🎉
