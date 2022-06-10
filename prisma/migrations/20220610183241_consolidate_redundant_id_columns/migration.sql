/*
  Warnings:

  - The primary key for the `stops` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `stops` table. All the data in the column will be lost.
  - The primary key for the `trips` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `trips` table. All the data in the column will be lost.
  - The primary key for the `routes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `routes` table. All the data in the column will be lost.
  - Made the column `stop_id` on table `stops` required. This step will fail if there are existing NULL values in that column.
  - Made the column `trip_id` on table `trips` required. This step will fail if there are existing NULL values in that column.
  - Made the column `route_id` on table `routes` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_shapes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shape_id" INTEGER NOT NULL DEFAULT 0,
    "shape_pt_lat" REAL DEFAULT 0,
    "shape_pt_lon" REAL DEFAULT 0,
    "shape_pt_sequence" INTEGER DEFAULT 0,
    "shape_dist_traveled" REAL DEFAULT 0
);
INSERT INTO "new_shapes" ("id", "shape_dist_traveled", "shape_id", "shape_pt_lat", "shape_pt_lon", "shape_pt_sequence") SELECT "id", "shape_dist_traveled", coalesce("shape_id", 0) AS "shape_id", "shape_pt_lat", "shape_pt_lon", "shape_pt_sequence" FROM "shapes";
DROP TABLE "shapes";
ALTER TABLE "new_shapes" RENAME TO "shapes";
CREATE TABLE "new_stop_times" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "trip_id" INTEGER DEFAULT 0,
    "arrival_time" TEXT DEFAULT '',
    "departure_time" TEXT DEFAULT '',
    "stop_id" INTEGER DEFAULT 0,
    "stop_sequence" INTEGER DEFAULT 0,
    "pickup_type" INTEGER DEFAULT 0,
    "drop_off_type" INTEGER DEFAULT 0,
    "shape_dist_traveled" REAL DEFAULT 0,
    CONSTRAINT "stop_times_stop_id_fkey" FOREIGN KEY ("stop_id") REFERENCES "stops" ("stop_id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "stop_times_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips" ("trip_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_stop_times" ("arrival_time", "departure_time", "drop_off_type", "id", "pickup_type", "shape_dist_traveled", "stop_id", "stop_sequence", "trip_id") SELECT "arrival_time", "departure_time", "drop_off_type", "id", "pickup_type", "shape_dist_traveled", "stop_id", "stop_sequence", "trip_id" FROM "stop_times";
DROP TABLE "stop_times";
ALTER TABLE "new_stop_times" RENAME TO "stop_times";
CREATE TABLE "new_stops" (
    "stop_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stop_code" INTEGER DEFAULT 0,
    "stop_name" TEXT DEFAULT '',
    "stop_desc" TEXT DEFAULT '',
    "stop_lat" REAL DEFAULT 0,
    "stop_lon" REAL DEFAULT 0,
    "zone_id" INTEGER DEFAULT 0,
    "wheelchair_boarding" INTEGER DEFAULT 0
);
INSERT INTO "new_stops" ("stop_code", "stop_desc", "stop_id", "stop_lat", "stop_lon", "stop_name", "wheelchair_boarding", "zone_id") SELECT "stop_code", "stop_desc", "stop_id", "stop_lat", "stop_lon", "stop_name", "wheelchair_boarding", "zone_id" FROM "stops";
DROP TABLE "stops";
ALTER TABLE "new_stops" RENAME TO "stops";
CREATE TABLE "new_trips" (
    "trip_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "route_id" INTEGER DEFAULT 0,
    "service_id" INTEGER DEFAULT 0,
    "trip_headsign" TEXT DEFAULT '',
    "direction_id" INTEGER DEFAULT 0,
    "block_id" INTEGER DEFAULT 0,
    "shape_id" INTEGER DEFAULT 0,
    CONSTRAINT "trips_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "routes" ("route_id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_trips" ("block_id", "direction_id", "route_id", "service_id", "shape_id", "trip_headsign", "trip_id") SELECT "block_id", "direction_id", "route_id", "service_id", "shape_id", "trip_headsign", "trip_id" FROM "trips";
DROP TABLE "trips";
ALTER TABLE "new_trips" RENAME TO "trips";
CREATE TABLE "new_routes" (
    "route_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "agency_id" TEXT DEFAULT '',
    "route_short_name" TEXT DEFAULT '',
    "route_long_name" TEXT DEFAULT '',
    "route_type" INTEGER DEFAULT 0,
    "route_url" TEXT DEFAULT '',
    "route_color" TEXT DEFAULT ''
);
INSERT INTO "new_routes" ("agency_id", "route_color", "route_id", "route_long_name", "route_short_name", "route_type", "route_url") SELECT "agency_id", "route_color", "route_id", "route_long_name", "route_short_name", "route_type", "route_url" FROM "routes";
DROP TABLE "routes";
ALTER TABLE "new_routes" RENAME TO "routes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
