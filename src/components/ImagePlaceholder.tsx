import React from 'react';

interface ImagePlaceholderProps {
  id: string;
  width?: string;
  height?: string;
  className?: string;
  description?: string;
  src?: string;
  alt?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  id,
  width = '100%',
  height = '200px',
  className = '',
  description,
  src,
  alt
}) => {
  // Map of image IDs to actual image URLs
  const imageMap: Record<string, { src: string; alt: string }> = {
    // Header and Hero Section
    'image1': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=100',
      alt: 'Keep Knockin Logo'
    },
    'image2': {
      src: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=40&h=40',
      alt: 'Profile Menu Icon'
    },
    'image3': {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=60&h=60',
      alt: 'Decorative Arrow'
    },
    
    // Features Section
    'image4': {
      src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      alt: 'Mobile App Interface'
    },
    'image5': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      alt: 'Video Resume Feature'
    },
    'image6': {
      src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      alt: 'Event Discovery'
    },
    'image7': {
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      alt: 'Verified Companies'
    },
    
    // Profile Images
    'image8': {
      src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=164&h=164',
      alt: 'User Profile 1'
    },
    'image9': {
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=164&h=164',
      alt: 'User Profile 2'
    },
    'image10': {
      src: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=164&h=164',
      alt: 'User Profile 3'
    },
    
    // Stand Out Feature
    'image11': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=200',
      alt: 'Stand Out Background'
    },
    'image12': {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=22&h=22',
      alt: 'Stand Out Icon'
    },
    
    // Event Cards (image13-image28)
    'image13': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=26&h=26',
      alt: 'Event Organizer Logo 1'
    },
    'image14': {
      src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=157&h=157',
      alt: 'Event Image 1'
    },
    'image15': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=26&h=26',
      alt: 'Event Organizer Logo 2'
    },
    'image16': {
      src: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=157&h=157',
      alt: 'Event Image 2'
    },
    'image17': {
      src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=26&h=26',
      alt: 'Event Organizer Logo 3'
    },
    'image18': {
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=157&h=157',
      alt: 'Event Image 3'
    },
    'image19': {
      src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=26&h=26',
      alt: 'Event Organizer Logo 4'
    },
    'image20': {
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=157&h=157',
      alt: 'Event Image 4'
    },
    'image21': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=26&h=26',
      alt: 'Event Organizer Logo 5'
    },
    'image22': {
      src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=157&h=157',
      alt: 'Event Image 5'
    },
    'image23': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=26&h=26',
      alt: 'Event Organizer Logo 6'
    },
    'image24': {
      src: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=157&h=157',
      alt: 'Event Image 6'
    },
    'image25': {
      src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=26&h=26',
      alt: 'Event Organizer Logo 7'
    },
    'image26': {
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=157&h=157',
      alt: 'Event Image 7'
    },
    'image27': {
      src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=26&h=26',
      alt: 'Event Organizer Logo 8'
    },
    'image28': {
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=157&h=157',
      alt: 'Event Image 8'
    },
    
    // Additional Images
    'image31': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=60',
      alt: 'Backed By Logos'
    },
    'image32': {
      src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=237&h=526',
      alt: 'iPhone Mockup 1'
    },
    'image33': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=237&h=526',
      alt: 'iPhone Mockup 2'
    },
    'image34': {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=28&h=33',
      alt: 'Explore Arrow'
    },
    'image35': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=187&h=55',
      alt: 'App Store Badge'
    },
    'image36': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=187&h=56',
      alt: 'Google Play Badge'
    },
    
    // CTA and Footer Images
    'cta-app-store': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=187&h=55',
      alt: 'App Store Download'
    },
    'cta-google-play': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=187&h=56',
      alt: 'Google Play Download'
    },
    'footer-app-store': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=120&h=36',
      alt: 'Footer App Store'
    },
    'footer-google-play': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=120&h=36',
      alt: 'Footer Google Play'
    },
    
    // Social Icons
    'pinterest-icon': {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=24&h=24',
      alt: 'Pinterest'
    },
    'linkedin-icon': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=24&h=24',
      alt: 'LinkedIn'
    },
    'instagram-icon': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=24&h=24',
      alt: 'Instagram'
    },
    'youtube-icon': {
      src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=24&h=24',
      alt: 'YouTube'
    },
    
    // Feature Icons
    'icon1': {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=22&h=22',
      alt: 'Feature Icon 1'
    },
    'icon2': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=22&h=22',
      alt: 'Feature Icon 2'
    },
    'icon3': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=22&h=22',
      alt: 'Feature Icon 3'
    },
    'icon4': {
      src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=22&h=22',
      alt: 'Feature Icon 4'
    },
    
    // Event Icons
    'icon21': {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=12&h=15',
      alt: 'Location Icon'
    },
    'icon22': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=15&h=15',
      alt: 'Time Icon'
    },
    'icon13': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=13&h=15',
      alt: 'Date Icon 1'
    },
    'icon14': {
      src: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=13&h=15',
      alt: 'Date Icon 2'
    },
    'icon15': {
      src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=13&h=15',
      alt: 'Date Icon 3'
    },
    'icon16': {
      src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=13&h=15',
      alt: 'Date Icon 4'
    },
    'icon17': {
      src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=13&h=15',
      alt: 'Date Icon 5'
    },
    'icon18': {
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=13&h=15',
      alt: 'Date Icon 6'
    },
    'icon19': {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=13&h=15',
      alt: 'Date Icon 7'
    },
    'icon20': {
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=13&h=15',
      alt: 'Date Icon 8'
    }
  };

  const imageData = imageMap[id] || { src: src || '', alt: alt || description || `Image ${id}` };

  if (imageData.src) {
    return (
      <img 
        src={imageData.src}
        alt={imageData.alt}
        className={`${className} object-cover`}
        style={{ width, height }}
        loading="lazy"
      />
    );
  }

  // Fallback to placeholder if no image found
  return (
    <div 
      className={`image-placeholder ${className} bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 font-medium text-sm`}
      style={{ width, height }}
      data-image-id={id}
    >
      <div className="text-center">
        <div className="text-2xl mb-2">📷</div>
        <div>{id}</div>
        {description && (
          <div className="text-xs opacity-70 mt-1">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};