package org.example.backend;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.time.LocalDate;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
public class BookingTests {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mockMvc;

    @BeforeEach
    void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    // Test 1: Valid booking request
    @Test
    void testValidBookingRequest() throws Exception {
        String json = """
                {
                    "adSpaceId": 10,
                    "advertiserName": "Acme Corp",
                    "advertiserEmail": "acme@example.com",
                    "startDate": "%s",
                    "endDate": "%s",
                    "status": "PENDING",
                    "totalCost": 1000
                }
                """.formatted(LocalDate.now().plusDays(2), LocalDate.now().plusDays(20));

        mockMvc.perform(post("/api/v1/booking-requests")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isBadRequest());
    }

    // Test 2: Start date must be in the future
    @Test
    void testStartDateMustBeInFuture() throws Exception {
        String json = """
                {
                    "adSpaceId": 1,
                    "advertiserName": "Acme Corp",
                    "advertiserEmail": "acme@example.com",
                    "startDate": "%s",
                    "endDate": "%s",
                    "status": "PENDING",
                    "totalCost": 1000
                }
                """.formatted(LocalDate.now().minusDays(1), LocalDate.now().plusDays(5));

        mockMvc.perform(post("/api/v1/booking-requests")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isBadRequest());
    }

    // Test 3: End date must be after start date
    @Test
    void testEndDateAfterStartDate() throws Exception {
        String json = """
                {
                    "adSpaceId": 1,
                    "advertiserName": "Acme Corp",
                    "advertiserEmail": "acme@example.com",
                    "startDate": "%s",
                    "endDate": "%s",
                    "status": "PENDING",
                    "totalCost": 1000
                }
                """.formatted(LocalDate.now().plusDays(10), LocalDate.now().plusDays(5));

        mockMvc.perform(post("/api/v1/booking-requests")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isBadRequest());
    }

    // Test 4: Minimum booking duration (7 days)
    @Test
    void testMinimumBookingDuration() throws Exception {
        String json = """
                {
                    "adSpaceId": 1,
                    "advertiserName": "Acme Corp",
                    "advertiserEmail": "acme@example.com",
                    "startDate": "%s",
                    "endDate": "%s",
                    "status": "PENDING",
                    "totalCost": 1000
                }
                """.formatted(LocalDate.now().plusDays(1), LocalDate.now().plusDays(5));

        mockMvc.perform(post("/api/v1/booking-requests")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isBadRequest());
    }
}
