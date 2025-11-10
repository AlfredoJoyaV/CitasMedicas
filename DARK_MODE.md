# 🌓 Sistema de Modo Oscuro

## ✨ Características Implementadas

### 1. **Detección Automática del Sistema Operativo**
El tema se detecta automáticamente según la preferencia del sistema operativo del usuario:
- Si el SO está en modo oscuro → La app se muestra en modo oscuro
- Si el SO está en modo claro → La app se muestra en modo claro

### 2. **Tres Modos Disponibles**
El botón de tema permite alternar entre tres estados:
1. **☀️ Modo Claro** - Colores claros forzados
2. **🌙 Modo Oscuro** - Colores oscuros forzados  
3. **🖥️ Modo Sistema** - Detecta automáticamente la preferencia del SO (indicado con rayo azul)

### 3. **Persistencia**
La preferencia del usuario se guarda en `localStorage` y se mantiene entre sesiones.

### 4. **Transiciones Suaves**
Todos los cambios de color tienen transiciones suaves de 300ms para una experiencia visual agradable.

## 🎨 Paleta de Colores

### Modo Claro
- Fondo: Gradiente indigo-900 → purple-700 → pink-600
- Tarjetas: Blanco con transparencia (95%)
- Texto: Gris oscuro
- Inputs: Gris claro con hover a blanco

### Modo Oscuro
- Fondo: Gradiente gray-900 → gray-800 → gray-900
- Tarjetas: Gris oscuro con transparencia (95%)
- Texto: Blanco/Gris claro
- Inputs: Gris oscuro con hover a gris medio

## 🔧 Componentes Creados

### `ThemeProvider.tsx`
Proveedor de contexto que:
- Detecta la preferencia del sistema operativo
- Gestiona el estado del tema
- Escucha cambios en la preferencia del sistema
- Guarda/carga la preferencia del localStorage

### `ThemeToggle.tsx`
Botón interactivo que:
- Muestra el icono apropiado (☀️/🌙)
- Indica cuando está en modo sistema (🖥️)
- Tiene animaciones y tooltips
- Alterna entre los tres modos

## 📁 Archivos Modificados

1. `src/app/layout.tsx` - Envuelve la app con ThemeProvider
2. `src/app/[lang]/page.tsx` - Agrega clases dark: y botón de tema
3. `src/app/components/From/Form.tsx` - Todos los inputs con dark mode
4. `src/app/globals.css` - Variables CSS y scrollbar personalizado

## 🚀 Cómo Usar

El modo oscuro funciona automáticamente. El usuario puede:
1. **Hacer clic** en el botón flotante (esquina superior derecha)
2. Cada clic cambia el modo: Claro → Oscuro → Sistema → Claro
3. El sistema **recordará** la preferencia elegida

## 💡 Detalles Técnicos

- Usa `matchMedia` para detectar `prefers-color-scheme`
- Implementa el hook `useTheme()` para acceder al tema desde cualquier componente
- Compatible con Tailwind CSS v4
- Sin dependencias externas adicionales
- SSR-safe (evita hydration mismatch)
