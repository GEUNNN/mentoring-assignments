import React from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import "./Contents.css";
import {
  useMutationPostFavorite,
  useQueryGetDetailList,
  useQueryGetCredits,
  useQueryGetReviewList,
} from "../apis/query";
import DetailSection from "./components/DetailSection";
import CastSection from "./components/CastSection";
import ReviewSection from "./components/ReviewSection";

const Contents: React.FC = () => {
  const { id } = useParams();

  const { data: detail } = useQueryGetDetailList(id!);

  const { mutate: postFavorite } = useMutationPostFavorite(Number(id));

  const { data: credits } = useQueryGetCredits(id!);
  const { cast, crew } = credits || {};
  const castMembers = cast?.slice(0, 5);
  const crewMembers = crew?.slice(0, 5);

  const { data: reviewList } = useQueryGetReviewList(id!);
  const reviews = reviewList?.results || [];
  const reviewShowing = reviews.slice(0, 6);

  if (!detail) return <div className="content-container">Loading...</div>;

  return (
    <div className="content-container">
      <Header isSearchPage={false} />
      <DetailSection detail={detail} postFavorite={postFavorite} />
      <CastSection castMembers={castMembers} crewMembers={crewMembers} />
      <ReviewSection reviewShowing={reviewShowing} />
    </div>
  );
};

export default Contents;
