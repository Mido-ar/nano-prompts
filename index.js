const englishUIText = {
  title: "Nano Banana Prompt Builder",
  help: "Help",
  selectMainCategory: "Select a Category",
  architecture: "Architecture",
  architectureDesc: "Generate prompts for building exteriors, CAD transformations, and realistic renderings.",
  interiorDesign: "Interior Design",
  interiorDesignDesc: "Create prompts for living spaces, kitchens, offices, and commercial interiors.",
  urbanDesign: "Urban Design",
  urbanDesignDesc: "Build prompts for public spaces, landscape elements, and historical revitalization.",
  subcategories: "Subcategories",
  back: "Back",
  selectPromptCategory: "Select Prompt Category",
  generatedPrompt: "Generated Prompt",
  copy: "Copy",
  copied: "Copied!",
  clearAll: "Clear All",
  randomize: "Randomize",
  confirmationTitle: "Are you sure?",
  clearConfirmation: "This will reset all your current selections. Do you want to continue?",
  randomizeConfirmation: "This will replace all your current selections with random ones. Do you want to continue?",
  confirm: "Confirm",
  cancel: "Cancel",
  helpTitle: "How to Use the Prompt Builder",
  helpStep1Title: "1. Choose a Main Category",
  helpStep1Desc: "Start by selecting one of the main categories like Architecture, Interior Design, or Urban Design. This will take you to the prompt generator screen.",
  helpStep2Title: "2. Select a Prompt Subcategory",
  helpStep2Desc: "Once in the generator, choose a specific task or prompt type from the 'Select Prompt Category' dropdown. This will load the relevant template and variables.",
  helpStep3Title: "3. Fill in the Variables",
  helpStep3Desc: "Use the dropdown menus to select options for each variable. As you make selections, the 'Generated Prompt' on the right will update in real-time. Hover over a variable name to see a helpful tooltip.",
  helpStep4Title: "4. Use Your Prompt",
  helpStep4Desc: "Once you are happy with the result, click the 'Copy' button to copy the prompt to your clipboard ready to paste into Google AI studio using Nano Banana. You can use 'Clear All' to reset your selections or 'Randomize' to quickly generate a new combination.",
  authorName: "Ibrahim A.I. Abdelhady",
  authorLinkedin: "https://www.linkedin.com/in/ibrahimabdelhady/",
  creatorName: "M. Ibrahim Salem",
  creatorLinkedin: "https://www.linkedin.com/in/mohamedibrahims/",
  openInAIStudio: "Open Google AI Studio (Copy first!)",
};

const allPrompts = {
  "Architecture": {
    "Luxurious Residential Villa Rendering": {
        template: "A highly realistic architectural visualization of a luxurious [Building Style] residential villa that strictly follows the same structural form and proportions of the reference building without altering its architectural shape. The villa is fully finished with [Material Color Palette] materials, featuring a façade decorated with [Facade Finish], classical columns, detailed moldings, and ornate trims. In front of the villa, there is a beautifully landscaped garden with [Garden Type], colorful flowers, and a [Pool Type]. The overall [Mood of Rendering] lighting is during the [Time of Day/Weather], with [Light Quality] illuminating the villa façade, [Interior Light Effect] glowing through the UPVC windows, and garden lights glowing warmly under the trees. [Atmospheric Effect] adds depth and atmosphere.",
        variables: [
            { name: "Building Style", options: ["classical-style", "neoclassical-style", "baroque-style", "mediterranean-style"], description: "Defines the primary architectural style of the villa, from Classical to Mediterranean." },
            { name: "Material Color Palette", options: ["elegant light-colored", "rich dark-toned", "warm terracotta and stone", "crisp white and blue"], description: "Choose the overall color scheme for the building's materials." },
            { name: "Facade Finish", options: ["natural stone cladding", "smooth marble veneer", "painted stucco and intricate brickwork", "travertine tiles"], description: "Select the primary finishing material for the exterior walls." },
            { name: "Garden Type", options: ["tropical trees and lush plants", "manicuredeuropean hedges and topiary", "desert xeriscape and succulents", "formal symmetrical plantings"] },
            { name: "Pool Type", options: ["small swimming pool", "infinity-edge pool", "long reflective pond", "jacuzzi spa"] },
            { name: "Mood of Rendering", options: ["luxurious and grand", "serene and tranquil", "dramatic and moody", "vibrant and energetic"], description: "Sets the emotional tone and atmosphere of the final image." },
            { name: "Time of Day/Weather", options: ["golden hour", "blue hour (twilight)", "midday clear sky", "overcast and misty morning"] },
            { name: "Light Quality", options: ["warm sunlight", "cool ambient light", "dramatic directional beams", "soft, uniform lighting"] },
            { name: "Interior Light Effect", options: ["soft warm interior lights", "cool, modern interior lights", "deep, golden chandelier glow", "subtle, minimal interior lights"] },
            { name: "Atmospheric Effect", options: ["A light mist or haze softly diffuses the garden lights and background", "A clear, crisp atmosphere with sharp shadows", "Heavy rain with street reflections", "Subtle dust motes floating in the light beams"], description: "Add environmental effects like fog, rain, or clear air to enhance realism." }
        ]
    },
    "Exterior to CAD Transformation": {
        template: "Convert this [Building View Type] into a flat 2D CAD drawing. Remove all perspective distortion and represent the façade as a straight orthographic [Drawing Type]. Use [Line Style] outlines with correct proportions of windows, doors, walls, and roofline. [Detail Level]. The result should look like a professional CAD architectural geometry.",
        variables: [
            { name: "Building View Type", options: ["exterior building perspective", "interior room perspective", "aerial site view", "architectural render"] },
            { name: "Drawing Type", options: ["elevation drawing", "floor plan", "section view", "site plan"] },
            { name: "Line Style", options: ["crisp, clean black", "thin, technical blue", "bold, uniform grey", "dashed construction"] },
            { name: "Detail Level", options: ["No shading, no hatching, no textures, no people, no background context — only the building's architectural geometry.", "Minimal hatching for material differentiation, no people or context.", "Basic furniture outlines and room labels, no textures.", "Full construction details including dimensions and annotations."] }
        ]
    },
    "Real Life to 3D Model": {
        template: "Convert this [Input Type] into a 3D physical model style representation. Preserve the proportions, geometry, and spatial layout exactly as in the render. Represent the design as a [Model Style] study model with clean, sharp edges and smooth surfaces. Place it against a [Background Setting] with [Lighting Style]. [Detail Constraints]. The result should look like a professional architectural model photograph, minimal and precise.",
        variables: [
            { name: "Input Type", options: ["photorealistic render", "architectural photograph", "hand-drawn sketch", "CAD drawing"] },
            { name: "Model Style", options: ["monochrome white", "light grey textured", "wooden grain", "transparent acrylic"] },
            { name: "Background Setting", options: ["plain seamless white background", "neutral grey studio background", "simple black backdrop", "minimalist wooden surface"] },
            { name: "Lighting Style", options: ["soft neutral studio lighting", "dramatic overhead lighting", "bright, even ambient lighting", "backlit with subtle shadows"] },
            { name: "Detail Constraints", options: ["No textures, no colors, no décor, no people.", "Subtle material differentiation allowed, no people or vibrant colors.", "Basic contextual elements (e.g., minimal landscaping), no people.", "Strictly geometric forms, no organic elements."] }
        ]
    },
    "Sketch to 3D Model": {
        template: "Convert this [Input Type] into a [Render Quality] photorealistic render. Preserve the composition, proportions, and spatial layout exactly as shown in the sketch. Translate the linework into accurate architectural geometry, keeping walls, windows, and openings consistent. Apply [Material Style] materials based on the sketch cues. Render the scene with [Lighting Style] with [Shadow Quality]. Use a [Camera Lens Type] lens at [Camera Height] for a [Perspective Type]. Show crisp textures, lifelike reflections, and subtle details, and add [Scene Elements] in the scene.",
        variables: [
            { name: "Input Type", options: ["hand-drawn architectural sketch", "conceptual design sketch", "rough pencil drawing", "inked architectural illustration"] },
            { name: "Render Quality", options: ["high-quality", "ultra-realistic", "stylized artistic", "draft-quality"] },
            { name: "Material Style", options: ["realistic materials based on the sketch cues [concrete, wood, glass, fabric, etc.]", "monochromatic materials with emphasis on form", "vibrant, expressive materials", "subtle, natural material palette"] },
            { name: "Lighting Style", options: ["naturalistic cinematic lighting", "bright and airy daylighting", "dramatic evening lighting with spotlights", "soft, diffused ambient lighting"] },
            { name: "Shadow Quality", options: ["balanced shadows", "sharp, deep shadows", "minimal, soft shadows", "long, raking shadows"] },
            { name: "Camera Lens Type", options: ["35 mm lens", "50 mm standard lens", "24 mm wide-angle lens", "85 mm portrait lens"] },
            { name: "Camera Height", options: ["eye level (1.6 m)", "bird's-eye view (10 m)", "worm's-eye view (0.5 m)", "elevated perspective (3 m)"] },
            { name: "Perspective Type", options: ["natural perspective", "dynamic dramatic perspective", "flat orthographic perspective", "intimate close-up perspective"] },
            { name: "Scene Elements", options: ["walking people and cars", "minimal vegetation and subtle background elements", "active street life with bustling crowds", "tranquil setting with sparse figures"] }
        ]
    },
    "2D to 3D Sections": {
        template: "Convert this [Input Type] into a [Output Model Type] model. Preserve the geometry, wall thicknesses, proportions, and spatial layout exactly as in the section. Extrude the 2D linework into accurate 3D volumes, showing floors, walls, windows, and openings. Represent materials [Material Realism] (e.g., concrete structure, glazing, wood flooring), but keep the cut plane crisp with [Cut Plane Style]. Present the view in an [Projection Type] (no perspective distortion), with the cutaway exposing [Exposed Elements]. Place the model against a [Background Type] with [Shadow Style]. [Additional Elements Constraint].",
        variables: [
            { name: "Input Type", options: ["2D architectural section drawing", "floor plan layout", "elevation view sketch", "schematic diagram"] },
            { name: "Output Model Type", options: ["3D axonometric cutaway", "isometric exploded view", "perspective section", "cross-section diorama"] },
            { name: "Material Realism", options: ["realistically", "stylistically with simplified textures", "abstractly with color-coded zones", "monochromatically"] },
            { name: "Cut Plane Style", options: ["clean black section lines", "thin dashed cut lines", "highlighted red section edges", "subtle grey cut surfaces"] },
            { name: "Projection Type", options: ["axonometric projection", "isometric projection", "oblique projection", "dimetric projection"] },
            { name: "Exposed Elements", options: ["both the sectional depth and the interior spaces", "only the primary interior spaces", "structural elements and building services", "specific floor levels and key rooms"] },
            { name: "Background Type", options: ["plain white background", "neutral grey seamless background", "subtle gradient background", "transparent background for overlay"] },
            { name: "Shadow Style", options: ["soft shadows", "sharp, defined shadows", "no shadows (flat)", "subtle ambient occlusion"] },
            { name: "Additional Elements Constraint", options: ["Do not add extra furniture or décor unless specified.", "Include essential built-in furniture.", "Show minimal human figures for scale.", "Add conceptual landscape elements."] }
        ]
    },
    "2D Rendering Variables": {
        template: "Create a [Render Quality] architectural visualization of a [Building Type], keeping all architectural proportions, ornamentation, and details exactly the same. Use [Material Palette] — [Primary Facade Material] with fine classical detailing, decorative cornices, [Window Style] with [Window Frame Color], and [Balcony Feature]. Add a [Exterior Environment] with [Lighting Style]. Include a [Ground Elements], [Street Elements], [Vegetation Type], and [Landscape Elements]. Add both [Natural Lighting Type] and [Artificial Lighting Type] — [Artificial Light Fixtures] and [Interior Lighting Effect] — to emphasize depth and realism. Show [Interior Detail Level] behind the glass to add a lived-in, elegant atmosphere. Keep the same camera angle and composition while ensuring [Realism Level] lighting, materials, and environment integration. Style: [Overall Aesthetic], [Resolution], [Texture Emphasis], [Architectural Details], [Lighting Balance], [Shadow Quality], [Contextual Setting].",
        variables: [
            { name: "Render Quality", options: ["photorealistic", "hyper-realistic", "stylized artistic", "concept-level"] },
            { name: "Building Type", options: ["classical residential building", "neoclassical townhouse", "baroque-inspired villa", "mediterranean mansion"] },
            { name: "Material Palette", options: ["the same materials and textures", "updated modern materials", "distressed vintage materials", "luxurious contrasting materials"] },
            { name: "Primary Facade Material", options: ["light beige natural stone cladding", "white marble cladding", "dark grey polished granite", "warm terracotta stucco"] },
            { name: "Window Style", options: ["arched windows", "rectangular sash windows", "floor-to-ceiling windows", "ornate bay windows"] },
            { name: "Window Frame Color", options: ["black frames", "dark bronze frames", "white frames", "natural wood frames"] },
            { name: "Balcony Feature", options: ["wrought-iron balcony railings", "glass balcony balustrades", "stone balustrades", "minimalist metal railings"] },
            { name: "Exterior Environment", options: ["realistic exterior environment", "stylized urban setting", "serene garden surrounding", "minimalist paved plaza"] },
            { name: "Lighting Style", options: ["soft daylight and warm sunlight reflections", "dramatic sunset glow", "cool, crisp morning light", "moody overcast lighting"] },
            { name: "Ground Elements", options: ["clean paved sidewalk", "cobblestone path", "grassy lawn", "exposed aggregate pathway"] },
            { name: "Street Elements", options: ["asphalt street, luxury parked cars", "historic brick street, vintage cars", "modern street with electric vehicles", "pedestrianized street with bicycles"] },
            { name: "Vegetation Type", options: ["palm trees, shrubs", "deciduous trees, flowering bushes", "Mediterranean olive trees, lavender", "tropical ferns, vibrant blossoms"] },
            { name: "Landscape Elements", options: ["elegant greenery integrated into the landscape", "formal hedges and sculpted topiary", "minimalist planters with succulents", "wild, naturalized planting beds"] },
            { name: "Natural Lighting Type", options: ["natural daylight", "golden hour sunlight", "blue hour ambient light", "bright midday sun"] },
            { name: "Artificial Lighting Type", options: ["subtle warm artificial lighting", "bright cool artificial lighting", "dramatic accent lighting", "minimal, hidden lighting"] },
            { name: "Artificial Light Fixtures", options: ["façade sconces, balcony lamps", "recessed up lights, path lights", "ornate lanterns, string lights", "LED strips, modern wall washers"] },
            { name: "Interior Lighting Effect", options: ["soft interior glow through the windows", "brightly lit rooms visible", "subtle silhouettes from interior lights", "dark interiors with dramatic highlights"] },
            { name: "Interior Detail Level", options: ["visible interior furniture behind the glass", "hint of interior activity", "empty interiors for a clean look", "detailed interior vignettes"] },
            { name: "Realism Level", options: ["ultra-realistic", "photorealistic", "high-detail", "concept-level"] },
            { name: "Overall Aesthetic", options: ["Photorealistic Architectural Rendering", "Artistic Impression", "Technical Visualization", "Vibrant and Dynamic Scene"] },
            { name: "Resolution", options: ["Ultra HD 8K", "4K High Definition", "Full HD", "Web Resolution"] },
            { name: "Texture Emphasis", options: ["Realistic Beige Stone Texture", "Smooth Polished Surfaces", "Rough Textured Finishes", "Detailed Material Shaders"] },
            { name: "Architectural Details", options: ["Classical Façade Detailing", "Minimalist Architectural Lines", "Ornate Baroque Embellishments", "Industrial Structural Elements"] },
            { name: "Lighting Balance", options: ["Balanced Daylight and Warm Lighting", "Dramatic Contrast Lighting", "Soft Ambient Illumination", "Bright, Even Lighting"] },
            { name: "Shadow Quality", options: ["Hyperrealistic Shadows", "Soft Diffused Shadows", "Crisp, Defined Shadows", "Subtle Ambient Occlusion"] },
            { name: "Contextual Setting", options: ["Natural Urban Context", "Lush Suburban Landscape", "Historic Cityscape", "Seaside Coastal Environment"] }
        ]
    },
    "Fast Rendering": {
        template: "Convert the [Render Type] into a realistic [Time of Day] photograph of a [Project Type / Subject]. Inspired by [Architectural Reference / Style] — [Lighting and Mood], [Material or Texture Emphasis], [Render Quality / Realism Level].",
        variables: [
            { name: "Render Type", options: ["ambient occlusion", "shaded render", "wireframe render", "clay render"] },
            { name: "Time of Day", options: ["bright morning", "soft afternoon", "ambient evening", "dramatic twilight"] },
            { name: "Project Type / Subject", options: ["modern minimalist living room", "bohemian chic lounge", "classic elegant drawing room", "futuristic skyscraper exterior", "cozy cafe interior"] },
            { name: "Architectural Reference / Style", options: ["Art Deco influences", "Scandinavian design principles", "Brutalist architecture cues", "Japanese traditional aesthetics", "Mediterranean villa elements"] },
            { name: "Lighting and Mood", options: ["warm and inviting", "cool and sophisticated", "dramatic and moody", "bright and airy", "subtle and serene"] },
            { name: "Material or Texture Emphasis", options: ["glossy reflections and smooth surfaces", "rough concrete and natural wood textures", "plush fabrics and intricate patterns", "sleek metal and transparent glass", "earthy tones and organic materials"] },
            { name: "Render Quality / Realism Level", options: ["photorealistic", "stylized artistic", "concept visualization", "hyper-realistic cinematic", "architectural illustration"] }
        ]
    },
    "Camera Angle Adjustment": {
        template: "Change the camera angle of the [Render Type / Project] to a [Desired Viewpoint].",
        variables: [
            { name: "Render Type / Project", options: ["photorealistic render", "architectural model", "interior view", "exterior facade", "high-rise building"] },
            { name: "Desired Viewpoint", options: ["high-angle aerial drone shot", "low-angle street view", "worm's-eye view", "bird's-eye top-down plan", "human eye level (1.6m)", "dramatic close-up"] }
        ]
    },
    "Context Change & Integration": {
        template: "Place the [Architectural Object] seamlessly into a [New Background Context]. Set with [Specific Environmental or Climatic Details]. The integration should be inspired by [Architectural Reference / Visual Style] — featuring [Lighting / Mood], [Surrounding Elements], and achieving [Render Realism Level].",
        variables: [
            { name: "Architectural Object", options: ["the existing curved high-rise building design", "a neoclassical residential villa", "a modern office tower", "a minimalist pavilion structure", "the spiral skyscraper"] },
            { name: "New Background Context", options: ["a bustling urban street in London", "a serene waterfront promenade in Dubai", "a snowy mountain landscape", "a dense tropical jungle", "a futuristic cityscape at night"] },
            { name: "Specific Environmental or Climatic Details", options: ["clear blue skies with warm sunlight", "overcast rainy weather with wet reflections", "dense fog at dawn", "a vibrant sunset over the ocean", "snow-covered ground and frosty trees"] },
            { name: "Architectural Reference / Visual Style", options: ["London's classic brick architecture", "contemporary glass and steel designs", "brutalist concrete aesthetics", "organic, nature-inspired forms", "traditional Middle Eastern design"] },
            { name: "Lighting / Mood", options: ["bright and lively daytime ambiance", "dramatic and moody evening glow", "cool and crisp morning light", "warm and inviting golden hour", "dynamic street lighting at night"] },
            { name: "Surrounding Elements", options: ["pedestrians, cars, and traditional street furniture", "palm trees, luxury yachts, and coastal amenities", "snow-dusted trees and distant mountain peaks", "dense foliage, exotic birds, and winding paths", "neon signs, flying vehicles, and sleek urban infrastructure"] },
            { name: "Render Realism Level", options: ["photorealistic integration", "stylized artistic render", "highly detailed conceptual visualization", "cinematic realism"] }
        ]
    },
    "Material Change": {
        template: "Change the [Current Material] on the [Architectural Element] to [New Material Type]. The transformation must retain the [Element to Be Retained], ensuring the new material is fully integrated under the existing [Lighting and Mood] of the scene.",
        variables: [
            { name: "Current Material", options: ["smooth grey concrete", "reflective curtain glass", "rough red brick", "natural wood panelling", "white painted stucco"] },
            { name: "Architectural Element", options: ["building facade", "interior feature wall", "roof surface", "external paving", "interior flooring"] },
            { name: "New Material Type", options: ["rough exposed board-formed concrete", "dark oxidized copper panels", "polished black marble veneer", "weathered cedar planks", "transparent solar glass"] },
            { name: "Element to Be Retained", options: ["structural form and geometry", "window sizes and frames", "composition and camera angle", "surrounding landscape elements"] },
            { name: "Lighting and Mood", options: ["dramatic golden hour lighting", "cool, even ambient light", "bright midday sun with sharp shadows", "moody twilight glow"] }
        ]
    },
    "Render Floor Plans": {
        template: "Render a [Floor Plan Type] for a [Building Type] floor plan. Show [Fittings and Furnishings]. Apply the [Visual Style / Rendering Approach]. Use [Lighting / Shadows / Mood], and define the [Materials / Textures / Finishes] to bring the spaces to life.",
        variables: [
            { name: "Floor Plan Type", options: ["simple top-down plan", "3D axonometric projection", "cutaway dollhouse view", "exploded isometric plan"] },
            { name: "Building Type", options: ["residential apartment", "single-family home", "commercial office space", "small boutique retail store", "modern museum gallery"] },
            { name: "Fittings and Furnishings", options: ["full furniture, carpets, and fixtures", "minimal built-in cabinetry and plumbing only", "architectural walls and doors only", "plants and decorative elements added"] },
            { name: "Visual Style / Rendering Approach", options: ["photorealistic", "hand-drawn watercolor sketch", "technical blueprint style", "colorful children's book illustration", "monochrome line art"] },
            { name: "Lighting / Shadows / Mood", options: ["soft, ambient daylight with gentle shadows", "dramatic night lighting with interior glows", "bright, overexposed midday sun", "flat, shadowless studio light"] },
            { name: "Materials / Textures / Finishes", options: ["polished wood, white marble, and clean glass", "rough concrete, exposed brick, and metal accents", "vibrant colored tiles and plush velvet fabrics", "simple white walls and grey flooring"] }
        ]
    },
    "2D Plan to 3D": {
        template: "Convert the [Input Floor Plan] into a [3D View Type] of a [Building Type]. Show [Layout Detail] with a [Line Style / Color Scheme]. Include [Architectural Features / Details] and [Decor / Landscaping Elements]. The overall style should be [Visual / Architectural Style], defined by [Lighting / Shadows / Mood].",
        variables: [
            { name: "Input Floor Plan", options: ["2D architectural floor plan", "hand-drawn sketch", "technical blueprint", "simple schematic diagram"] },
            { name: "3D View Type", options: ["3D model with walls cutaway (dollhouse view)", "high-angle axonometric view", "low-angle interior perspective", "isometric exploded view"] },
            { name: "Building Type", options: ["residential home interior", "modern office space", "industrial loft apartment", "retail store layout"] },
            { name: "Layout Detail", options: ["full room layout and furniture", "minimal built-in features only", "empty shell with only walls and openings", "detailed textures and wall finishes"] },
            { name: "Line Style / Color Scheme", options: ["monochrome white model on a grey background", "technical blueprint style with color-coded zones", "soft, earthy color palette", "vibrant, high-contrast scheme"] },
            { name: "Architectural Features / Details", options: ["exterior walls, windows, and roofline", "balconies and terraces", "stairs, railings, and ceiling heights", "structural columns and beams"] },
            { name: "Decor / Landscaping Elements", options: ["modern minimalist decor and indoor plants", "lush exterior landscaping and patio furniture", "simple, non-specific furniture blocks", "detailed kitchen and bathroom fixtures"] },
            { name: "Visual / Architectural Style", options: ["photorealistic and modern", "conceptual and abstract", "classic European elegance", "minimalist Scandinavian design"] },
            { name: "Lighting / Shadows / Mood", options: ["bright and airy daylighting", "dramatic evening glow with deep shadows", "soft, uniform studio lighting", "moody, atmospheric twilight"] }
        ]
    },
    "Generate 2D Elevations": {
        template: "Convert the input into a [Elevation Type]. Show [Architectural Elements] with [Detailing Style]. The overall style should be [Technical / Visual Style], emphasizing [Precision / Scale / Proportions], with [Material / Texture Inclusion], and [Shadow / Lighting Style].",
        variables: [
            { name: "Elevation Type", options: ["2D architectural elevation", "sectional elevation", "orthographic facade drawing", "axonometric elevation"] },
            { name: "Architectural Elements", options: ["full building façade, structural details, and openings", "only window and door placements", "key structural elements and roofline", "material changes and decorative features"] },
            { name: "Detailing Style", options: ["clean line style with hatching and annotations", "simple black outlines without hatching", "detailed construction lines with dimensions", "conceptual sketch lines with minimal detail"] },
            { name: "Technical / Visual Style", options: ["technical CAD style", "schematic diagram", "hand-drawn architectural drawing", "stylized graphic elevation"] },
            { name: "Precision / Scale / Proportions", options: ["precise and to scale proportions", "accurate geometric representation", "conceptual and illustrative proportions", "exaggerated for artistic effect"] },
            { name: "Material / Texture Inclusion", options: ["basic material indications with subtle textures if needed", "no textures, purely line work", "full photorealistic material rendering", "abstract color-coded materials"] },
            { name: "Shadow / Lighting Style", options: ["minimal, clean shadows", "no shadows (flat graphic)", "subtle ambient occlusion", "directional light with soft shadows"] }
        ]
    },
    "Generate Sections": {
        template: "Convert [Building / Project Type] into a [Section Type / Perspective] taken at the [Section Cut Location]. Show [Internal Elements], [Furnishings], and [Architectural Details]. The overall style should be [Visual Style / Technical Detail], defined by [Materials / Textures / Finishes], [Lighting / Shadows / Depth], and emphasizing [Render Quality / Precision].",
        variables: [
            { name: "Building / Project Type", options: ["high-rise tower", "residential home", "public library", "commercial mixed-use building"] },
            { name: "Section Type / Perspective", options: ["longitudinal section", "cross-section", "section-elevation hybrid", "isometric cutaway section"] },
            { name: "Section Cut Location", options: ["center of the building", "along the main stair core", "through the primary facade", "across a corner bay"] },
            { name: "Internal Elements", options: ["internal spaces, floor levels, and structural elements", "only structural framework and vertical circulation", "HVAC and mechanical systems", "room labels and dimensions"] },
            { name: "Furnishings", options: ["detailed furniture and fixtures", "simple ghosted furniture outlines", "no furniture, focusing on space", "only built-in cabinetry and appliances"] },
            { name: "Architectural Details", options: ["stairs, railings, and ceiling details", "connection details and cladding systems", "material joints and thresholds", "landscaping elements visible in section"] },
            { name: "Visual Style / Technical Detail", options: ["technical detail with hatching and callouts", "simple monochrome line work", "watercolor artistic style", "CAD black and white schematic"] },
            { name: "Materials / Textures / Finishes", options: ["realistic materials and textures", "abstract color-coded zones", "simple grey concrete massing", "wood grain and exposed steel"] },
            { name: "Lighting / Shadows / Depth", options: ["soft volumetric light and subtle depth", "dramatic cross-section lighting", "flat, shadowless graphic", "strong light source casting deep shadows"] },
            { name: "Render Quality / Precision", options: ["high-quality precision", "conceptual sketch quality", "ultra-realistic render", "diagrammatic and simplified"] }
        ]
    },
    "Architectural Models": {
        template: "Convert [Building / Project Type] into a physical architectural model. Define the [Model Style / Making Style]. Apply a specific [Color Scheme / Monochrome] palette. Set the model in a realistic [Setting / Lighting / Shadows / Mood]. The presentation should use a defined [Presentation / Perspective], achieving a high [Detail Level / Realism].",
        variables: [
            { name: "Building / Project Type", options: ["high-rise tower", "residential villa", "large museum complex", "small pavilion structure", "urban masterplan"] },
            { name: "Model Style / Making Style", options: ["clean study model with sharp edges", "complex presentation model with layers", "conceptual abstract wireframe model", "topographic site model"] },
            { name: "Color Scheme / Monochrome", options: ["pure monochrome white", "warm wooden tones", "light grey concrete textures", "abstract color-coded zones", "high-contrast black and white"] },
            { name: "Setting / Lighting / Shadows / Mood", options: ["soft neutral studio lighting on a seamless background", "dramatic overhead lighting with deep shadows", "sunny outdoor setting on a wooden table", "moody twilight with internal glow"] },
            { name: "Presentation / Perspective", options: ["close-up ground-level photograph", "high-angle aerial shot", "side view on a simple pedestal", "dynamic view with a blurred background"] },
            { name: "Detail Level / Realism", options: ["ultra-realistic photography of a physical model", "conceptual and diagrammatic", "high detail with intricate connections", "simple massing model"] }
        ]
    },
    "Diagram / Sketch Generation": {
        template: "Convert the [Typology] building into a [Diagram Type] diagram. Set the visual language using [Diagram Style / Artistic Influence]. Use a [Visual Style / Colors / Lines] scheme to convey the design concept.",
        variables: [
            { name: "Typology", options: ["high-rise tower", "residential villa", "museum structure", "mixed-use development", "urban masterplan"] },
            { name: "Diagram Type", options: ["axonometric exploded diagram", "conceptual analysis diagram", "circulation and flow chart", "structural decomposition diagram", "massing evolution study"] },
            { name: "Diagram Style / Artistic Influence", options: ["minimalist MVRDV style", "hand-drawn Bjarke Ingels style", "technical OMA/Rem Koolhaas style", "conceptual abstract collage", "classic architectural charcoal sketch"] },
            { name: "Visual Style / Colors / Lines", options: ["simple black and white line work", "vibrant color-coded zones", "high-contrast technical lines on a grey background", "soft, atmospheric watercolor wash"] }
        ]
    },
    "Moodboard Generation (Exterior)": {
        template: "Create an architectural exterior mood board for [project type / concept]. Showcase [facade elements / materials / textures], including [specific material types / details]. Layout: [composition / organization style].",
        variables: [
            { name: "project type / concept", options: ["sustainable eco-residence", "high-rise luxury condo", "industrial-chic restaurant", "contemporary art gallery"] },
            { name: "facade elements / materials / textures", options: ["glazing and sun shading", "natural wood siding and rough-cut stone", "polished concrete and perforated metal screens"] },
            { name: "specific material types / details", options: ["Shou Sugi Ban cedar", "Corten steel rainscreen", "vertical Ipe wood slats", "large format porcelain panels"] },
            { name: "composition / organization style", options: ["clean grid layout", "organic collage style", "minimal single-focus layout", "triptych composition"] }
        ]
    }
  },
  "Interior Design": {
    "Living Room Transformation": {
        template: "Convert the [Input Type] into a realistic [Lighting/Time] photograph of a [Space Type/Style].",
        variables: [
            { name: "Input Type", options: ["mood board", "floor plan sketch", "3D wireframe"] },
            { name: "Lighting/Time", options: ["bright morning", "soft afternoon", "ambient evening"] },
            { name: "Space Type/Style", options: ["modern minimalist living room", "bohemian chic lounge", "classic elegant drawing room"] }
        ]
    },
    "Kitchen Design": {
        template: "Convert the [Input Type] into a realistic [Lighting/Time] photograph of a [Space Type/Style].",
        variables: [
            { name: "Input Type", options: ["cabinetry layout", "material sample board", "isometric drawing"] },
            { name: "Lighting/Time", options: ["sunny daytime", "culinary evening", "early breakfast"] },
            { name: "Space Type/Style", options: ["contemporary chef's kitchen", "rustic farmhouse kitchen", "sleek industrial kitchen"] }
        ]
    },
    "Home Office Optimization": {
        template: "Convert the [Input Type] into a realistic [Lighting/Time] photograph of a [Space Type/Style].",
        variables: [
            { name: "Input Type", options: ["ergonomic study", "storage solution diagram", "material specification sheet"] },
            { name: "Lighting/Time", options: ["focused daylight", "late-night work session", "casual afternoon"] },
            { name: "Space Type/Style", options: ["minimalist home office", "creative studio space", "executive study"] }
        ]
    },
    "Bedroom 3D Design": {
        template: "Convert the [Input Type] into a realistic [Lighting/Time] photograph of a [Space Type/Style].",
        variables: [
            { name: "Input Type", options: ["furniture layout", "textile mood board", "lighting plan"] },
            { name: "Lighting/Time", options: ["lazy Sunday morning", "cozy evening reading", "peaceful night"] },
            { name: "Space Type/Style", options: ["serene master bedroom", "compact guest bedroom", "playful kid's bedroom"] }
        ]
    },
    "Commercial Interior Concept": {
        template: "Convert the [Input Type] into a realistic [Lighting/Time] photograph of a [Space Type/Style].",
        variables: [
            { name: "Input Type", options: ["brand identity board", "customer journey map", "spatial flow diagram"] },
            { name: "Lighting/Time", options: ["peak business hours", "welcoming opening", "quiet closing"] },
            { name: "Space Type/Style", options: ["high-end fashion boutique", "bustling cafe interior", "innovative tech showroom"] }
        ]
    },
    "Bathroom Spa Experience": {
        template: "Convert the [Input Type] into a realistic [Lighting/Time] photograph of a [Space Type/Style].",
        variables: [
            { name: "Input Type", options: ["fixture selection sheet", "tile pattern diagram", "plumbing schematic"] },
            { name: "Lighting/Time", options: ["refreshing morning", "relaxing evening", "spa-like ambiance"] },
            { name: "Space Type/Style", options: ["contemporary master bathroom", "compact urban powder room", "spacious wellness spa bathroom"] }
        ]
    }
  },
  "Urban Design": {
      "2D Sketch Revitalization and Rendering": {
          template: "Convert the [Input Type] into a realistic [Time/Mood] photograph of a [Space Type]",
          variables: [
              { name: "Input Type", options: ["conceptual sketch", "GIS overlay", "3D wireframe"] },
              { name: "Time/Mood", options: ["early morning", "bright afternoon", "serene evening"] },
              { name: "Space Type", options: ["linear park", "community garden", "public plaza"] }
          ]
      },
      "Mixed-Use District Rendering": {
          template: "Convert the [Input Type] into a realistic [Time/Mood] photograph of a [Space Type].",
          variables: [
              { name: "Input Type", options: ["master plan blueprint", "massing model", "zoning map"] },
              { name: "Time/Mood", options: ["vibrant daytime", "warm dusk", "illuminated night"] },
              { name: "Space Type", options: ["mixed-income residential block", "cultural and commercial hub", "waterfront regeneration area"] }
          ]
      },
      "Conceptual 2D Section to 3D Rendering": {
          template: "Convert the [Input Type] into a realistic [Time/Flow] photograph of a [Space Type].",
          variables: [
              { name: "Input Type", options: ["transportation network diagram", "conceptual street section", "material study"] },
              { name: "Time/Flow", options: ["rush hour", "midday flow", "quiet night"] },
              { name: "Space Type", options: ["pedestrian-priority street", "integrated bike lane system", "autonomous vehicle route"] }
          ]
      },
      "Conceptual 2D Sketch to 3D Rendering (Landscape/Ecological)": {
          template: "Convert the [Input Type] into a realistic [Atmosphere] photograph of a [Space Type].",
          variables: [
              { name: "Input Type", options: ["hydrological analysis", "landscape design proposal", "flood protection schematic"] },
              { name: "Atmosphere", options: ["sunny and calm", "pre-storm atmosphere", "post-event recovery"] },
              { name: "Space Type", options: ["coastal promenade", "ecological buffer zone", "elevated urban platform"] }
          ]
      },
      "Redesigning of Landscape Elements": {
          template: "Redesign the existing [Space Type] from the attached reference images, incorporating [Incorporated Elements] with a [Design Style] style. Render this as a realistic [Activity/Time] photograph, showcasing enhanced [Enhancements].",
          variables: [
              { name: "Space Type", options: ["pedestrian walkway", "public plaza", "shaded promenade", "bustling market square"] },
              { name: "Incorporated Elements", options: ["innovative shading solutions", "vibrant native flora", "interactive water features", "multi-sensory public art", "sustainable material pathways"] },
              { name: "Design Style", options: ["futuristic aesthetic", "minimalist approach", "traditional craftsmanship", "biophilic design", "adaptable modular system"] },
              { name: "Activity/Time", options: ["early morning serenity", "bustling midday activity", "ambient evening glow", "dynamic nighttime event"] },
              { name: "Enhancements", options: ["integrated smart lighting designs", "ergonomic and communal seating arrangements", "large-scale sculptural art installations", "permeable paving with stormwater management"] }
          ]
      },
      "Redesigning of Historical Elevations": {
          template: "Create a detailed architectural elevation rendering of a [Building Type] facade, focusing on the integration of [Focus Elements]. The design should incorporate [Style Guide] rendered in a [Rendering Style].",
          variables: [
              { name: "Building Type", options: ["residential townhouse", "commercial building", "cultural institution"] },
              { name: "Focus Elements", options: ["ornate window treatments", "prominent entryways", "decorative balconies", "detailed rooflines"] },
              { name: "Style Guide", options: ["historical motifs", "contemporary minimalist forms", "regional vernacular elements"] },
              { name: "Rendering Style", options: ["technical drawing overlay", "watercolor sketch style", "photorealistic detail"] }
          ]
      },
      "Buildings Restorations": {
          template: "Convert the [Input State] into a realistic [Mood/Aesthetic] photograph of a [Structure Type] after a comprehensive [Intervention Type].",
          variables: [
              { name: "Input State", options: ["dilapidated state", "historical document", "initial concept sketch"] },
              { name: "Mood/Aesthetic", options: ["bright and inviting", "elegant and subdued", "modern and clean"] },
              { name: "Structure Type", options: ["heritage building storefront", "neglected urban underpass", "residential property exterior"] },
              { name: "Intervention Type", options: ["restoration", "adaptive reuse", "contemporary renovation"] }
          ]
      }
  }
};

const uiText = englishUIText;

// --- STATE MANAGEMENT ---
let state = {
    currentView: 'main', // 'main', 'generator', 'help'
    mainCategory: null,
    subCategory: '',
    variables: {},
    generatedPrompt: '...',
    theme: 'light',
    confirmation: {
        isOpen: false,
        message: '',
        onConfirm: () => {},
    },
};

// --- DOM ELEMENT REFERENCES ---
const doc = document.documentElement;
const appTitle = document.getElementById('app-title');
const helpBtn = document.getElementById('help-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIconDark = document.getElementById('theme-icon-dark');
const themeIconLight = document.getElementById('theme-icon-light');

const mainView = document.getElementById('main-view');
const generatorView = document.getElementById('generator-view');
const helpView = document.getElementById('help-view');
const allViews = [mainView, generatorView, helpView];

const mainTitle = document.getElementById('main-title');
const categoryCardsContainer = document.getElementById('category-cards-container');
const mainViewFooter = document.getElementById('main-view-footer');

const backToMainBtn = document.getElementById('back-to-main-btn');
const backBtnText = document.getElementById('back-btn-text');
const generatorMainCategory = document.getElementById('generator-main-category');
const subCategorySelectContainer = document.getElementById('sub-category-select-container');
const variablesContainer = document.getElementById('variables-container');
const generatorActions = document.getElementById('generator-actions');
const clearAllBtn = document.getElementById('clear-all-btn');
const randomizeBtn = document.getElementById('randomize-btn');
const generatedPromptTitle = document.getElementById('generated-prompt-title');
const copyBtn = document.getElementById('copy-btn');
const generatedPromptOutput = document.getElementById('generated-prompt-output');
const openInAIStudioBtnText = document.getElementById('open-in-ai-studio-btn-text');

const helpContent = document.getElementById('help-content');
document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', handleBackToMain);
});
document.querySelectorAll('.back-btn-text').forEach(el => el.textContent = uiText.back);


const confirmationDialog = document.getElementById('confirmation-dialog');
const confirmationTitle = document.getElementById('confirmation-title');
const confirmationMessage = document.getElementById('confirmation-message');
const confirmationCancelBtn = document.getElementById('confirmation-cancel-btn');
const confirmationConfirmBtn = document.getElementById('confirmation-confirm-btn');


// --- RENDER & UPDATE FUNCTIONS ---

function updateView() {
    allViews.forEach(view => view.classList.add('hidden'));
    switch (state.currentView) {
        case 'main': mainView.classList.remove('hidden'); break;
        case 'generator': generatorView.classList.remove('hidden'); break;
        case 'help': helpView.classList.remove('hidden'); break;
    }
}

function updateGeneratedPrompt() {
    const subCategoryData = allPrompts[state.mainCategory]?.[state.subCategory];
    if (subCategoryData) {
        let promptText = subCategoryData.template;
        subCategoryData.variables.forEach(v => {
            const value = state.variables[v.name];
            const placeholder = `[${v.name}]`;
            // Using split/join for safe replacement of placeholders without regex issues.
            promptText = promptText.split(placeholder).join(value || placeholder);
        });
        state.generatedPrompt = promptText;
    } else {
        state.generatedPrompt = '...';
    }
    generatedPromptOutput.textContent = state.generatedPrompt;
}

function createSelectInputHTML(id, label, options, placeholder, tooltip) {
    const optionsHTML = options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('');
    return `
        <div class="flex flex-col space-y-2">
            <div class="relative group w-fit">
                <label for="${id}" class="text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span class="${tooltip ? 'border-b border-dotted border-slate-500 dark:border-slate-400 cursor-help' : ''}">${label}</span>
                </label>
                ${tooltip ? `
                    <div role="tooltip" class="absolute bottom-full left-1/2 z-20 -translate-x-1/2 mb-2 w-max max-w-sm p-3 text-sm text-slate-100 bg-slate-900 dark:bg-slate-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                        ${tooltip}
                        <div class="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-900 dark:border-t-slate-700"></div>
                    </div>
                ` : ''}
            </div>
            <div class="relative">
                <select id="${id}" name="${id}" class="appearance-none block w-full pl-3 pr-10 py-2 text-base border border-slate-300 bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg shadow-sm transition">
                    <option value="">${placeholder}</option>
                    ${optionsHTML}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700 dark:text-slate-400">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
                </div>
            </div>
        </div>
    `;
}

function renderGenerator() {
    generatorMainCategory.textContent = state.mainCategory;
    
    // Render Sub-category select
    const subCategories = allPrompts[state.mainCategory] || {};
    const subCategoryOptions = Object.keys(subCategories).map(key => ({ label: key, value: key }));
    subCategorySelectContainer.innerHTML = createSelectInputHTML(
        'sub-category-select', 
        uiText.selectPromptCategory, 
        subCategoryOptions,
        uiText.selectPromptCategory
    );
    const subCategorySelect = document.getElementById('sub-category-select');
    subCategorySelect.value = state.subCategory;
    subCategorySelect.addEventListener('change', handleSubCategoryChange);

    // Render variable selects
    variablesContainer.innerHTML = '';
    const subCategoryData = subCategories[state.subCategory];
    if (subCategoryData) {
        variablesContainer.classList.add('animate-fade-in');
        subCategoryData.variables.forEach(variable => {
            const varId = `var-${variable.name.replace(/\s+/g, '-')}`;
            const options = variable.options.map(opt => ({ label: opt, value: opt }));
            const selectHTML = createSelectInputHTML(
                varId,
                variable.name,
                options,
                `Select ${variable.name}`,
                variable.description
            );
            variablesContainer.innerHTML += selectHTML;
        });

        // Add event listeners and set values
        subCategoryData.variables.forEach(variable => {
            const varId = `var-${variable.name.replace(/\s+/g, '-')}`;
            const varSelect = document.getElementById(varId);
            varSelect.value = state.variables[variable.name] || '';
            varSelect.addEventListener('change', (e) => handleVariableChange(variable.name, e.target.value));
        });
        generatorActions.classList.remove('hidden');
    } else {
        variablesContainer.classList.remove('animate-fade-in');
        generatorActions.classList.add('hidden');
    }

    updateGeneratedPrompt();
}

function renderMainScreen() {
    const categoryStats = Object.keys(allPrompts).reduce((acc, catKey) => {
        acc[catKey] = { subcategories: Object.keys(allPrompts[catKey]).length };
        return acc;
    }, {});

    const categories = [
        { key: 'Architecture', title: uiText.architecture, desc: uiText.architectureDesc, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>' },
        { key: 'Interior Design', title: uiText.interiorDesign, desc: uiText.interiorDesignDesc, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>' },
        { key: 'Urban Design', title: uiText.urbanDesign, desc: uiText.urbanDesignDesc, icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 13v-6.5m6 6.5V7" /></svg>' }
    ];

    categoryCardsContainer.innerHTML = categories.map(cat => `
        <button data-category="${cat.key}" class="category-card group text-left bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full flex flex-col justify-between">
            <div>
                <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">${cat.icon}</div>
                <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100">${cat.title}</h3>
                <p class="text-slate-600 dark:text-slate-400 mt-1">${cat.desc}</p>
            </div>
            <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 text-sm">
                <p class="text-slate-500 dark:text-slate-400"><strong class="text-slate-700 dark:text-slate-200">${categoryStats[cat.key]?.subcategories || 0}</strong> ${uiText.subcategories}</p>
            </div>
        </button>
    `).join('');
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => handleMainCategorySelect(card.dataset.category));
    });
}

function renderConfirmationDialog() {
    if (state.confirmation.isOpen) {
        confirmationTitle.textContent = uiText.confirmationTitle;
        confirmationMessage.textContent = state.confirmation.message;
        confirmationDialog.classList.remove('hidden');
    } else {
        confirmationDialog.classList.add('hidden');
    }
}

// --- EVENT HANDLERS ---
function handleThemeToggle() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', state.theme);
    updateTheme();
}

function updateTheme() {
    if (state.theme === 'dark') {
        doc.classList.add('dark');
        themeIconDark.classList.add('hidden');
        themeIconLight.classList.remove('hidden');
    } else {
        doc.classList.remove('dark');
        themeIconDark.classList.remove('hidden');
        themeIconLight.classList.add('hidden');
    }
}

function resetState() {
    state.mainCategory = null;
    state.subCategory = '';
    state.variables = {};
    state.generatedPrompt = '...';
}

function handleBackToMain() {
    resetState();
    state.currentView = 'main';
    updateView();
}

function handleMainCategorySelect(category) {
    state.mainCategory = category;
    state.subCategory = '';
    state.variables = {};
    state.generatedPrompt = '...';
    state.currentView = 'generator';
    renderGenerator();
    updateView();
}

function handleSubCategoryChange(e) {
    state.subCategory = e.target.value;
    state.variables = {};
    // Re-render the generator to show variables for the new sub-category
    renderGenerator();
}

function handleVariableChange(name, value) {
    state.variables[name] = value;
    updateGeneratedPrompt();
}

function handleCopy() {
    navigator.clipboard.writeText(state.generatedPrompt);
    copyBtn.textContent = uiText.copied;
    setTimeout(() => {
        copyBtn.textContent = uiText.copy;
    }, 2000);
}

function handleClearAll() {
    state.confirmation = {
        isOpen: true,
        message: uiText.clearConfirmation,
        onConfirm: () => {
            const clearedVariables = {};
            if (allPrompts[state.mainCategory]?.[state.subCategory]) {
                allPrompts[state.mainCategory][state.subCategory].variables.forEach(v => {
                    clearedVariables[v.name] = '';
                });
            }
            state.variables = clearedVariables;
            renderGenerator();
        }
    };
    renderConfirmationDialog();
}

function handleRandomize() {
    const subCategoryData = allPrompts[state.mainCategory]?.[state.subCategory];
    if (!subCategoryData) return;
    
    state.confirmation = {
        isOpen: true,
        message: uiText.randomizeConfirmation,
        onConfirm: () => {
            const randomVariables = { ...state.variables };
            subCategoryData.variables.forEach(v => {
                const randomIndex = Math.floor(Math.random() * v.options.length);
                randomVariables[v.name] = v.options[randomIndex];
            });
            state.variables = randomVariables;
            renderGenerator();
        }
    };
    renderConfirmationDialog();
}

function handleConfirmAction() {
    if (typeof state.confirmation.onConfirm === 'function') {
        state.confirmation.onConfirm();
    }
    state.confirmation.isOpen = false;
    renderConfirmationDialog();
}

function handleCancelAction() {
    state.confirmation.isOpen = false;
    renderConfirmationDialog();
}

// --- INITIALIZATION ---
function init() {
    // Set initial text content from uiText
    appTitle.textContent = uiText.title;
    helpBtn.textContent = uiText.help;
    mainTitle.textContent = uiText.selectMainCategory;
    backBtnText.textContent = uiText.back;
    clearAllBtn.textContent = uiText.clearAll;
    randomizeBtn.textContent = uiText.randomize;
    generatedPromptTitle.textContent = uiText.generatedPrompt;
    copyBtn.textContent = uiText.copy;
    openInAIStudioBtnText.textContent = uiText.openInAIStudio;
    confirmationCancelBtn.textContent = uiText.cancel;
    confirmationConfirmBtn.textContent = uiText.confirm;
    mainViewFooter.innerHTML = `<p class="text-slate-600 dark:text-slate-400 leading-relaxed">
        This application, developed by
        <a href="${uiText.creatorLinkedin}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
            ${uiText.creatorName}
        </a>
        using Google AI Studio, is based on
        <a href="${uiText.authorLinkedin}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
            ${uiText.authorName}
        </a>
        's 'Nano Banana for Architects' (October 2025). Feel free to reach out for additions or inquiries, or fork the app on GitHub.
    </p>`;
    helpContent.innerHTML = `
        <h2 class="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">${uiText.helpTitle}</h2>
        <div class="space-y-6 text-slate-700 dark:text-slate-300">
            <div><h3 class="text-xl font-semibold mb-2">${uiText.helpStep1Title}</h3><p>${uiText.helpStep1Desc}</p></div>
            <div class="border-t pt-6 dark:border-slate-700"><h3 class="text-xl font-semibold mb-2">${uiText.helpStep2Title}</h3><p>${uiText.helpStep2Desc}</p></div>
            <div class="border-t pt-6 dark:border-slate-700"><h3 class="text-xl font-semibold mb-2">${uiText.helpStep3Title}</h3><p>${uiText.helpStep3Desc}</p></div>
            <div class="border-t pt-6 dark:border-slate-700"><h3 class="text-xl font-semibold mb-2">${uiText.helpStep4Title}</h3><p>${uiText.helpStep4Desc}</p></div>
        </div>`;

    // Setup theme
    state.theme = localStorage.getItem('theme') || 'light';
    updateTheme();
    doc.lang = 'en';
    doc.dir = 'ltr';

    // Attach event listeners
    themeToggleBtn.addEventListener('click', handleThemeToggle);
    helpBtn.addEventListener('click', () => { state.currentView = 'help'; updateView(); });
    backToMainBtn.addEventListener('click', handleBackToMain);
    copyBtn.addEventListener('click', handleCopy);
    clearAllBtn.addEventListener('click', handleClearAll);
    randomizeBtn.addEventListener('click', handleRandomize);
    confirmationCancelBtn.addEventListener('click', handleCancelAction);
    confirmationConfirmBtn.addEventListener('click', handleConfirmAction);

    // Initial render
    renderMainScreen();
    updateView();
}

// Start the application
init();