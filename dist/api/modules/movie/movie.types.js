"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Movie {\n    id: ID!\n    title: String!\n    description: String!\n    minutes: PositiveInt!\n    author: Author!\n    casts: [MovieCast!]!\n  }\n\n  type MovieCast {\n    id: ID!\n    actor: Actor!\n    castName: String!\n    movie: Movie!\n  }\n\n  # GET\n  input MovieInput {\n    id: ID!\n  }\n\n  # CREATE\n  type CreateMoviePayload {\n    movie: Movie!\n  }\n\n  input CreateMovieInput {\n    title: String!\n    description: String!\n    minutes: PositiveInt!\n    authorId: String!\n  }\n\n  type AddMovieCastPayload {\n    movieCast: MovieCast!\n  }\n\n  input AddMovieCastInput {\n    castName: String!\n    actorId: String!\n    movieId: String!\n  }\n\n  # UPDATE\n  type UpdateMoviePayload {\n    movie: Movie!\n  }\n\n  input UpdateMovieInput {\n    id: ID!\n    patch: UpdateMoviePatch!\n  }\n\n  input UpdateMoviePatch {\n    title: String\n    description: String\n    minutes: PositiveInt\n    authorId: String\n  }\n\n  # DELETE\n  type DeleteMoviePayload {\n    id: ID!\n  }\n\n  input DeleteMovieInput {\n    id: ID!\n  }\n\n  type RemoveMovieCastPayload {\n    id: ID!\n  }\n\n  input RemoveMovieCastInput {\n    id: ID!\n  }\n\n  extend type Query {\n    movie(input: MovieInput!): Movie!\n    movies: [Movie!]!\n  }\n\n  extend type Mutation {\n    createMovie(input: CreateMovieInput!): CreateMoviePayload!\n    updateMovie(input: UpdateMovieInput!): UpdateMoviePayload!\n    deleteMovie(input: DeleteMovieInput!): DeleteMoviePayload!\n    addMovieCast(input: AddMovieCastInput!): AddMovieCastPayload!\n    removeMovieCast(input: RemoveMovieCastInput!): RemoveMovieCastPayload!\n  }\n"], ["\n  type Movie {\n    id: ID!\n    title: String!\n    description: String!\n    minutes: PositiveInt!\n    author: Author!\n    casts: [MovieCast!]!\n  }\n\n  type MovieCast {\n    id: ID!\n    actor: Actor!\n    castName: String!\n    movie: Movie!\n  }\n\n  # GET\n  input MovieInput {\n    id: ID!\n  }\n\n  # CREATE\n  type CreateMoviePayload {\n    movie: Movie!\n  }\n\n  input CreateMovieInput {\n    title: String!\n    description: String!\n    minutes: PositiveInt!\n    authorId: String!\n  }\n\n  type AddMovieCastPayload {\n    movieCast: MovieCast!\n  }\n\n  input AddMovieCastInput {\n    castName: String!\n    actorId: String!\n    movieId: String!\n  }\n\n  # UPDATE\n  type UpdateMoviePayload {\n    movie: Movie!\n  }\n\n  input UpdateMovieInput {\n    id: ID!\n    patch: UpdateMoviePatch!\n  }\n\n  input UpdateMoviePatch {\n    title: String\n    description: String\n    minutes: PositiveInt\n    authorId: String\n  }\n\n  # DELETE\n  type DeleteMoviePayload {\n    id: ID!\n  }\n\n  input DeleteMovieInput {\n    id: ID!\n  }\n\n  type RemoveMovieCastPayload {\n    id: ID!\n  }\n\n  input RemoveMovieCastInput {\n    id: ID!\n  }\n\n  extend type Query {\n    movie(input: MovieInput!): Movie!\n    movies: [Movie!]!\n  }\n\n  extend type Mutation {\n    createMovie(input: CreateMovieInput!): CreateMoviePayload!\n    updateMovie(input: UpdateMovieInput!): UpdateMoviePayload!\n    deleteMovie(input: DeleteMovieInput!): DeleteMoviePayload!\n    addMovieCast(input: AddMovieCastInput!): AddMovieCastPayload!\n    removeMovieCast(input: RemoveMovieCastInput!): RemoveMovieCastPayload!\n  }\n"])));
exports["default"] = typeDefs;
var templateObject_1;
//# sourceMappingURL=movie.types.js.map