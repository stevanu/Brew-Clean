import { useState, useEffect } from "react";
import { SectionTitle } from "../elements/SectionTitle";
import Button from "../elements/Button";
import { GalleryDisplay } from "../fragments/galery/BeforeAfterSlider";
import galleryData from "../../data/PhotoGallery";

export const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ID foto spesifik yang ingin ditampilkan di halaman depan
  const selectedIds = [4, 5, 18, 22, 23, 35, 49, 50];
  const previewData = galleryData.filter((item) =>
    selectedIds.includes(item.id),
  );

  // Mencegah auto-scroll dan membuka modal
  const handleOpenModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  // Menutup modal
  const handleCloseModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(false);
  };

  // Mengunci scroll halaman utama saat modal terbuka
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <SectionTitle
        subtitle="Galeri Hasil Pekerjaan"
        title="Hasil Treatment Kami"
      />

      {/* Grid Utama */}
      <div
        id="gallery"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {previewData.map((item) => (
          <GalleryDisplay key={item.id} photo={item.photo} alt={item.alt} />
        ))}
      </div>

      {/* Tombol Lihat Semua */}
      <div className="flex justify-center text-white">
        <Button onClick={handleOpenModal}>Lihat Semua Galeri</Button>
      </div>

      {/* Popup Modal Galeri */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="sticky top-0 z-10 bg-white px-6 py-4 border-b flex justify-between items-center rounded-t-2xl">
              <h3 className="text-xl font-bold text-gray-800">
                Semua Hasil Treatment
              </h3>
              <button
                type="button"
                onClick={handleCloseModal}
                className="text-gray-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition duration-200"
                aria-label="Tutup Modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content Grid Foto */}
            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {galleryData.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-sm bg-gray-100"
                >
                  <img
                    src={item.photo}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
