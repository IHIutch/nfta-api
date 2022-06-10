import Joi from "joi";

export const calendarDatesSchema = Joi.object().keys({
  id: Joi.number().integer().min(1),
  service_id: Joi.number().integer().min(1),
  date: Joi.date(),
  exception_type: Joi.number().integer().min(1),
});

export const routesSchema = Joi.object().keys({
  id: Joi.number().integer().min(1),
  route_id: Joi.number().integer().min(1),
  agency_id: Joi.string().allow(""),
  route_short_name: Joi.string().allow(""),
  route_long_name: Joi.string().allow(""),
  route_type: Joi.number().integer().min(1),
  route_color: Joi.string().allow(""),
});

export const shapesSchema = Joi.object().keys({
  id: Joi.number().integer().min(1),
  shape_id: Joi.number().integer().min(1),
  shape_pt_lat: Joi.number().min(-90).max(90),
  shape_pt_lon: Joi.number().min(-180).max(180),
  shape_pt_sequence: Joi.number().integer().min(1),
  shape_dist_traveled: Joi.number().min(0),
});

export const stopsSchema = Joi.object().keys({
  id: Joi.number().integer().min(1),
  stop_id: Joi.number().integer().min(1),
  stop_code: Joi.number().integer(),
  stop_name: Joi.string().allow(""),
  stop_desc: Joi.string().allow(""),
  stop_lat: Joi.number().min(-90).max(90),
  stop_lon: Joi.number().min(-180).max(180),
  zone_id: Joi.number().integer().min(1),
  wheelchair_boarding: Joi.boolean(),
});

export const stopTimesSchema = Joi.object().keys({
  id: Joi.number().integer().min(1),
  trip_id: Joi.number().integer().min(1),
  arrival_time: Joi.string().allow(""),
  departure_time: Joi.string().allow(""),
  stop_id: Joi.number().integer().min(1),
  stop_sequence: Joi.number().integer().min(1),
  stop_headsign: Joi.string().allow(""),
  pickup_type: Joi.number().integer().min(1),
  drop_off_type: Joi.number().integer().min(1),
  shape_dist_traveled: Joi.number().min(0),
});

export const tripSchema = Joi.object().keys({
  id: Joi.number().integer().min(1),
  trip_id: Joi.number().integer().min(1),
  routeId: Joi.number().integer().min(1),
  serviceId: Joi.number().integer().min(1),
  tripId: Joi.number().integer().min(1),
  tripHeadsign: Joi.string().allow(""),
  directionId: Joi.number().integer().min(1),
  blockId: Joi.number().integer().min(1),
  shapeId: Joi.number().integer().min(1),
});
