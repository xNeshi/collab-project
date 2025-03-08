import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(
  `*[_type == 'project' && defined(slug.current) &&
  (!defined($search) || $search == "" || title match $search || category match $search || author->name match $search)]
  | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  author -> {
    _id, name, image
  },
  views,
  description,
  category,
  image
  }`
);

export const PROJECTS_BY_AUTHOR_ID_QUERY = defineQuery(
  `*[_type == 'project' && author._ref == $id]
  | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  author -> {
    _id, name, image
  },
  views,
  description,
  category,
  image
  }`
);

export const PROJECT_BY_ID_QUERY = defineQuery(
  `*[_type == 'project' && _id == $id][0] {
  _id,
  title,
  slug,
  _createdAt,
  author -> {
    _id, name, username, image, bio
  },
  views,
  description,
  category,
  image,
  concept,
  }`
);

export const PROJECTS_VIEWS_QUERY = defineQuery(
  `*[_type == 'project' && _id == $id][0] {
  views
  }`
);

export const AUTHOR_BY_ID_QUERY = defineQuery(
  `*[_type == 'author' && _id == $id][0] {
  _id,
  id,
  name,
  username,
  bio,
  email,
  image
  }`
);
