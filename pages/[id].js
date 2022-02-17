import { server } from "../config";

export const getStaticPaths = async (context) => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params }) => {
	const res = await fetch(`${server}/api/${params.id}`);
	const business = await res.json();

	return {
		revalidate: 86400, // rebuild this static page after every x seconds (when page is visited)
		props: {
			business,
		},
	};
};

const BusinessPage = ({ business }) => {
	return (
		<div>
			<img src={business.image_url} />
			<h1>{business.name}</h1>
			<div className="bussinessInfo">
				<div className="address">
					<ul>
						<li>
							<p>{business.address}</p>
						</li>
						<li>
							<p>{business.city}</p>
						</li>
						<li>
							<p>{business.zipCode}</p>
						</li>
					</ul>
				</div>
				<div className="flex-apart">
					<span>Rating:</span>
					<p>{business.rating}</p>
				</div>
				<div className="flex-apart">
					<span>Reviews:</span>
					<p>{business.reviewCount}</p>
				</div>
			</div>
		</div>
	);
};

export default BusinessPage;
