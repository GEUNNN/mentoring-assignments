import React, { useMemo } from "react";
import { useLocation, useParams } from "react-router";
import Header from "../components/Header";
import "./Contents.css";
import { useQueryGetDetailList } from "../query/query";
import DetailSection from "./components/DetailSection";
import CastSection from "./components/CastSection";
import ReviewSection from "./components/ReviewSection";
import { useQueryGetCredits } from "../query/credits";
import { useMutationPostFavorite } from "../query/post";
import { useQueryGetReviewList } from "../query/review";

const Contents: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();

  const isMovie = location.state === "movie";
  const isTv = location.state === "tv";

  const { data: movieDetail } = useQueryGetDetailList(id!, isMovie);
  const { data: tvDetail } = useQueryGetDetailList(id!, isTv);

  const detail = isMovie ? movieDetail : tvDetail;

  const { mutate: postFavorite } = useMutationPostFavorite(Number(id));

  const { data: credits } = useQueryGetCredits(id!);
  const { cast, crew } = credits || {};
  const castMembers = useMemo(() => cast?.slice(0, 5), [cast]);
  const crewMembers = useMemo(() => crew?.slice(0, 5), [crew]);

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
