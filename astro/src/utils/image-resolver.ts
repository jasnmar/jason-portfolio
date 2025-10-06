

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/projectImages/*.{jpeg,jpg,png,gif,webp}"
)

export const projectImagePaths: Record<
  string,
  () => Promise<{ default: ImageMetadata }>
> = {
  vanLife1: images["/src/assets/images/projectImages/VanLife1.webp"],
  vanLife2: images["/src/assets/images/projectImages/VanLife2.webp"],
  vanLife3: images["/src/assets/images/projectImages/VanLife3.webp"],
  vanLife4: images["/src/assets/images/projectImages/VanLife4.webp"],
  Quizzical1: images["/src/assets/images/projectImages/Quizzical1.webp"],
  Quizzical2: images["/src/assets/images/projectImages/Quizzical2.webp"],
  Tenzies1: images["/src/assets/images/projectImages/Tenzies1.webp"],
  Tenzies2: images["/src/assets/images/projectImages/Tenzies2.webp"],
  guides1: images["/src/assets/images/projectImages/Guides1.webp"],
  guides2: images["/src/assets/images/projectImages/Guides2.webp"],
  guides3: images["/src/assets/images/projectImages/Guides3.webp"],
  ORGuides1: images["/src/assets/images/projectImages/ORGuides1.webp"],
  ORGuides2: images["/src/assets/images/projectImages/ORGuides2.webp"],
  ORGuides3: images["/src/assets/images/projectImages/ORGuides3.webp"],
  ORGuides4: images["/src/assets/images/projectImages/ORGuides4.webp"],
  table1: images["/src/assets/images/projectImages/table1.webp"],
  table2: images["/src/assets/images/projectImages/table2.webp"],
  table3: images["/src/assets/images/projectImages/table3.webp"],
  table4: images["/src/assets/images/projectImages/table4.webp"],
  memory1: images["/src/assets/images/projectImages/memory1.webp"],
  memory2: images["/src/assets/images/projectImages/memory2.webp"],
  memory3: images["/src/assets/images/projectImages/memory3.webp"],
}
