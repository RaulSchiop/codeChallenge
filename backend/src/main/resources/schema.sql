
-- Table: ad_space
CREATE TABLE IF NOT EXISTS ad_space (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('Billboard', 'BusStop', 'MallDisplay', 'TransitAd')),
    location VARCHAR(255) NOT NULL,
    price_per_day NUMERIC(10,2) NOT NULL,
    status VARCHAR(50) NOT NULL CHECK (status IN ( 'Available', 'Booked', 'Maintenance')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Indexes
CREATE INDEX IF NOT EXISTS idx_ad_space_name ON ad_space(name);
CREATE INDEX IF NOT EXISTS idx_ad_space_type ON ad_space(type);
CREATE INDEX IF NOT EXISTS idx_ad_space_status ON ad_space(status);



-- Table: booking_request
CREATE TABLE IF NOT EXISTS booking_request (
                                               id BIGSERIAL PRIMARY KEY,
                                               ad_space_id BIGINT NOT NULL REFERENCES ad_space(id) ON DELETE CASCADE,
    advertiser_name VARCHAR(255) NOT NULL,
    advertiser_email VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL CHECK (status IN ('Pending', 'Approved', 'Rejected')),
    total_cost INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Indexes
CREATE INDEX IF NOT EXISTS idx_booking_ad_space_id ON booking_request(ad_space_id);
CREATE INDEX IF NOT EXISTS idx_booking_status ON booking_request(status);
CREATE INDEX IF NOT EXISTS idx_booking_start_end ON booking_request(start_date, end_date);
