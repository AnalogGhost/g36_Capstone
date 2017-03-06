#Project Mark My Words

##Pitch
Project markMyWords is an augmented reality application meant to facilitate location-based storytelling and information distribution. Through a phone or any other browser/camera combination, users can visually interact with markers representing audio uploads near their physical location, listen to and comment on them, and create their own (geo-tagged to their present location whenever they choose to upload the recording). Currently, the collection is not curated, but as the user base grows, we'll want to start worrying about brand associations and establish principles & guidelines for what is and isn't acceptable content on the MMW platform.

##Technologies to use:
+awe.js (for browser AR)
+PixLive (for ionic AR if we use Angular)
+ezAR (ionic?)

##Necessary APIs:
+Google Maps (or other mapping? ESRI?)
+waypointer.info - points of interest

##Seed Data:
+StoryCorps (need to ask permission to use their archives)

##Process
1. Build WEB-based (Angular?) full-stack application with awe.js
  -make sure awe.js functionality is totally modular to the app
  -make sure geolocation process will be easily convertible for mobile
  -don't rely too heavily on any GPS-ready AR stuff (just in case it's not possible on mobile)
  -understand how you might make it work with minimal geolocation data
2. Convert app into Ionic
3. Remove web-specific functionality
4. Replace awe.js functionality with ezAR
5. Implement any mobile-specific functionality

##TO DO:
+Track down whether or not React with AR is feasible at all
