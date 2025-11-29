
-- ad_space
INSERT INTO ad_space (name, type, location, price_per_day, status)
VALUES
    ('Times Square Billboard', 'Billboard', 'NewYork, NY', 5000.00, 'Available'),
    ('Central Bus Stop Display', 'BusStop', 'Los Angeles, CA', 150.00, 'Booked'),
    ('Mall Entrance Display', 'MallDisplay', 'Chicago, IL', 300.00, 'Available'),
    ('Subway Transit Ad', 'TransitAd', 'Boston, MA', 250.00, 'Maintenance');


-- booking_request
INSERT INTO booking_request (ad_space_id, advertiser_name, advertiser_email, start_date, end_date, status, total_cost)
VALUES
    (1, 'Acme Corp', 'contact@acme.com', '2025-12-01', '2025-12-15', 'Pending', 75000),
    (2, 'Beta LLC', 'info@beta.com', '2025-11-15', '2025-11-30', 'Approved', 2250),
    (3, 'Gamma Inc', 'sales@gamma.com', '2025-12-05', '2025-12-20', 'Rejected', 4500);
