import { SectionTitle } from "../elements/SectionTitle";
import Button from "../elements/Button";
import { BeforeAfterSlider } from "../fragments/galery/BeforeAfterSlider";

const galleryData = [
  {
    id: 1,
    before: "/images/shoes/shoe1-before.jpg",
    after: "/images/shoes/shoe1-after.jpg",
  },
  {
    id: 2,
    before: "/images/shoes/shoe1-before.jpg",
    after: "/images/shoes/shoe1-after.jpg",
  },
  {
    id: 3,
    before: "/images/shoes/shoe1-before.jpg",
    after: "/images/shoes/shoe1-after.jpg",
  },
  {
    id: 4,
    before: "/images/shoes/shoe1-before.jpg",
    after: "/images/shoes/shoe1-after.jpg",
  },
];

export const GallerySection = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <SectionTitle
        subtitle="Galeri Hasil Pekerjaan"
        title="Hasil Treatment Kami"
      />

      <div
        id="gallery"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {galleryData.map((item) => (
          <BeforeAfterSlider
            key={item.id}
            beforeImg={item.before}
            afterImg={item.after}
          />
        ))}
      </div>

      <div className="flex justify-center text-white">
        <Button onClick={() => console.log("Navigasi ke galeri")}>
          Lihat Semua Galeri
        </Button>
      </div>
    </section>
  );
};
