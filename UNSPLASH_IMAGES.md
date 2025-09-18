# Unsplash Image Integration

This document outlines the Unsplash images added to the Brewzo website to handle missing or broken local images.

## Added Unsplash Images

### 1. Hero Section Background
- **Location**: `src/pages/Home.tsx` - Hero section background
- **Unsplash URL**: `https://images.unsplash.com/photo-1554118811-1e0d58224f24`
- **Description**: Beautiful cafe interior with warm lighting
- **Usage**: Replaced video background with high-quality cafe image

### 2. Story Page Images
- **Coffee Making**: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085`
  - Barista carefully preparing coffee
  - Used in "Meet the Brew Crew" section

- **Fresh Coffee Beans**: `https://images.unsplash.com/photo-1559056199-641a0ac8b55e`
  - Freshly roasted coffee beans
  - Represents quality and freshness

- **Latte Art**: `https://images.unsplash.com/photo-1572442388796-11668a67e53d`
  - Cup of coffee with detailed latte art
  - Shows craftsmanship and attention to detail

### 3. Featured Items (ScrollStack)
All featured items now have fallback Unsplash images:

- **Mischievous Mocha**: Coffee cups and brewing equipment
- **Avocado Smash**: Fresh food and cafe ambiance
- **The Alchemist's Cold Brew**: Cold brew coffee preparation

### 4. Interactive Gallery (CircularGallery)
Enhanced with fallback images for:
- Mood Transformer
- Sunny Side Up
- Morning Bliss
- Cafe Vibes
- Book & Coffee
- Morning Miles

## Technical Implementation

### Image Fallback Component
Created `ImageWithFallback` component (`src/components/ui/image-with-fallback.tsx`):
- Automatically switches to fallback image on error
- Supports custom error handling
- Maintains all standard img tag properties

### CircularGallery Updates
- Added `fallbackImage` property to Media class
- Enhanced image loading with error handling
- Updated interface to support fallback URLs

### Features
1. **Automatic Fallback**: If local images fail to load, Unsplash images are used
2. **High Quality**: All images are optimized (w=600-2047, q=80)
3. **Thematically Appropriate**: All images match cafe/coffee theme
4. **Performance Optimized**: Images include appropriate sizing parameters

## Image Categories Used

### Coffee & Brewing
- Barista preparation shots
- Coffee beans and equipment
- Latte art and finished drinks

### Cafe Atmosphere
- Warm, inviting interior spaces
- Reading nooks with books
- Community gathering areas

### Food & Fresh Ingredients
- Fresh ingredients and prepared dishes
- Healthy options and artisan breads

## Benefits

1. **Reliability**: Website always displays images, even if local files are missing
2. **Professional Look**: High-quality stock photos maintain brand quality
3. **Fast Loading**: Optimized Unsplash URLs with compression
4. **Consistent Theme**: All fallback images match the cafe/coffee aesthetic

## Usage Notes

- Local images take priority when available
- Fallback images automatically load on error
- All images are properly attributed to Unsplash
- Images are served via Unsplash CDN for reliability