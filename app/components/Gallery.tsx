const Gallery: React.FC<{ photos: Array<{ src: string; alt?: string }> }> = ({
	photos,
}) => (
	<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
		{photos.map((photo) => (
			<div key={photo.src} className="group relative">
				<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
					<img
						src={photo.src}
						alt={photo.alt}
						className="object-cover object-center"
					/>
				</div>
			</div>
		))}
	</div>
);

export default Gallery;
