-- CreateTable
CREATE TABLE "calendar_dates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "service_id" INTEGER DEFAULT 0,
    "date" DATETIME NOT NULL,
    "exception_type" INTEGER DEFAULT 0
);

-- CreateTable
CREATE TABLE "routes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "route_id" INTEGER,
    "agency_id" TEXT DEFAULT '',
    "route_short_name" TEXT DEFAULT '',
    "route_long_name" TEXT DEFAULT '',
    "route_type" INTEGER DEFAULT 0,
    "route_url" TEXT DEFAULT '',
    "route_color" TEXT DEFAULT ''
);

-- CreateTable
CREATE TABLE "shapes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shape_id" INTEGER DEFAULT 0,
    "shape_pt_lat" REAL DEFAULT 0,
    "shape_pt_lon" REAL DEFAULT 0,
    "shape_pt_sequence" INTEGER DEFAULT 0,
    "shape_dist_traveled" REAL DEFAULT 0
);

-- CreateTable
CREATE TABLE "stops" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stop_id" INTEGER,
    "stop_code" INTEGER DEFAULT 0,
    "stop_name" TEXT DEFAULT '',
    "stop_desc" TEXT DEFAULT '',
    "stop_lat" REAL DEFAULT 0,
    "stop_lon" REAL DEFAULT 0,
    "zone_id" INTEGER DEFAULT 0,
    "wheelchair_boarding" INTEGER DEFAULT 0
);

-- CreateTable
CREATE TABLE "stop_times" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "trip_id" INTEGER DEFAULT 0,
    "arrival_time" TEXT DEFAULT '',
    "departure_time" TEXT DEFAULT '',
    "stop_id" INTEGER DEFAULT 0,
    "stop_sequence" INTEGER DEFAULT 0,
    "pickup_type" INTEGER DEFAULT 0,
    "drop_off_type" INTEGER DEFAULT 0,
    "shape_dist_traveled" REAL DEFAULT 0,
    CONSTRAINT "stop_times_stop_id_fkey" FOREIGN KEY ("stop_id") REFERENCES "stops" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "stop_times_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "trips" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "trips" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "trip_id" INTEGER,
    "route_id" INTEGER DEFAULT 0,
    "service_id" INTEGER DEFAULT 0,
    "trip_headsign" TEXT DEFAULT '',
    "direction_id" INTEGER DEFAULT 0,
    "block_id" INTEGER DEFAULT 0,
    "shape_id" INTEGER DEFAULT 0,
    CONSTRAINT "trips_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "routes" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "calendar_dates_date_key" ON "calendar_dates"("date");

-- CreateIndex
CREATE UNIQUE INDEX "routes_route_id_key" ON "routes"("route_id");

-- CreateIndex
CREATE UNIQUE INDEX "stops_stop_id_key" ON "stops"("stop_id");

-- CreateIndex
CREATE UNIQUE INDEX "trips_trip_id_key" ON "trips"("trip_id");
