# 🎬 Video Assets for Eclipsera

Due to GitHub's file size limitations, video files are not included in this repository.

## Required Video Files

Place the following video files in the `public/` directory:

### Mission Videos (Total: ~449 MB)

1. **Artemis II Astronaut Announcement_ April 3, 2023 (Official NASA Trailer).mp4** (5.46 MB)
   - Source: NASA Official

2. **LIFE ON ANOTHER PLANET ASPECT'25.mp4** (92.74 MB)
   - Custom competition video

3. **Space-Unraveling-the-Cosmos.mp4** (17.4 MB)
   - Documentary footage

4. **SpaceX Webcast Intro.mp4** (6.43 MB)
   - Source: SpaceX

5. **Starship _ Preparing for Second Flight Test.mp4** (26.32 MB)
   - Source: SpaceX

6. **Starship _ Second Flight Test.mp4** (40.84 MB)
   - Source: SpaceX

7. **THE-BEAUTY-OF-THE-UNIVERSE.mp4** (86.72 MB)
   - Documentary footage

8. **The-Universe-in-8K-Ultra-HD (2).mp4** (173.18 MB)
   - High-resolution space footage

## Alternative Solutions

### Option 1: Use Video Hosting Services
Consider hosting videos on:
- YouTube (embed with iframe)
- Vimeo
- Cloudinary
- AWS S3 / CloudFront

### Option 2: Git LFS (Large File Storage)
If you need to version control videos:

```bash
# Install Git LFS
git lfs install

# Track video files
git lfs track "*.mp4"

# Add and commit
git add .gitattributes
git commit -m "Configure Git LFS for videos"
```

### Option 3: External Download Link
Create a shared drive (Google Drive, Dropbox, etc.) with all videos and share the link with collaborators.

## Video Usage in Project

Videos are used in:
- `/src/app/missions/page.tsx` - Mission showcase videos
- `/src/components/sections/space-journey-video.tsx` - Background videos
- `/src/components/sections/artemis-video.tsx` - Artemis mission content

## Notes

- All videos should maintain their original filenames
- Ensure videos are in MP4 format for browser compatibility
- Consider compressing videos for better performance
- Add loading states for video components
