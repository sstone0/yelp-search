import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../context/appStore";

import BusinessItem from "./businessItem";
import MaxWidthSection from "./Layout/MaxWidthSection";

const BusinessListWrapper = styled(MaxWidthSection)`
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
`;

export default function BusinessList() {
  const { businesses } = useContext(AppContext);

  return (
    <BusinessListWrapper>
      {businesses.map((business) => {
        business = {
          id: business.id,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          phone: business.display_phone,
          price: business.price,
          image: business.image_url,
        };
        return <BusinessItem key={business.id} business={business} />;
      })}
    </BusinessListWrapper>
  );
}
