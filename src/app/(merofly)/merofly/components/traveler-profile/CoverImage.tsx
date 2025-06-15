import Image from "next/image"

const CoverImage = () => {
  return (
    <div className="relative h-48 sm:h-64 md:h-80 w-full bg-amber-300">
      <div className="absolute inset-0">
        <Image src="/user-hero.jpg" alt="Cover Image" fill priority className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </div>
  )
}

export default CoverImage
