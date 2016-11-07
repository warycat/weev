--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.1

-- Started on 2016-11-06 23:43:02

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 9 (class 2615 OID 5347635)
-- Name: weev; Type: SCHEMA; Schema: -; Owner: omntoujyfmjjuv
--

CREATE SCHEMA weev;


ALTER SCHEMA weev OWNER TO omntoujyfmjjuv;

SET search_path = weev, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 186 (class 1259 OID 5347741)
-- Name: users; Type: TABLE; Schema: weev; Owner: omntoujyfmjjuv
--

CREATE TABLE users (
    username character varying(16) NOT NULL,
    password character(32)
);


ALTER TABLE users OWNER TO omntoujyfmjjuv;

--
-- TOC entry 3001 (class 0 OID 5347741)
-- Dependencies: 186
-- Data for Name: users; Type: TABLE DATA; Schema: weev; Owner: omntoujyfmjjuv
--

COPY users (username, password) FROM stdin;
larry	a975886612fb217e4dc24d92ae565c0b
john	527bd5b5d689e2c32ae974c6229ff785
david	172522ec1028ab781d9dfd17eaca4427
\.


--
-- TOC entry 2886 (class 2606 OID 5347745)
-- Name: users_pkey; Type: CONSTRAINT; Schema: weev; Owner: omntoujyfmjjuv
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);


-- Completed on 2016-11-06 23:43:03

--
-- PostgreSQL database dump complete
--

