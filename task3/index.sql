SELECT broker.name, COUNT(customer.id) AS customer_count FROM broker LEFT JOIN customer ON broker.id = customer.broker_id GROUP BY broker.name ORDER BY customer_count DESC, broker.name ASC;