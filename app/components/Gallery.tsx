const Gallery: React.FC<{ photos: Array<{ src: string; alt?: string }> }> = ({
	photos,
}) => (
	<div className="grid gap-x-2 gap-y-10 grid-cols-2 mx-5">
		{photos.map((photo) => (
			<div key={photo.src} className="flex justify-center">
				<img
					src={photo.src}
					alt={photo.alt}
					className="object-cover object-center max-h-64 rounded-md hover:opacity-75"
				/>
			</div>
		))}
	</div>
);

export default Gallery;
