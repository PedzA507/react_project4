CREATE DATABASE  IF NOT EXISTS `shopdee` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shopdee`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: shopdee
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `custID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `imageFile` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `loginAttempt` tinyint NOT NULL DEFAULT '0',
  `lastAttemptTime` timestamp NULL DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`custID`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'pichai','1234','pichai','chaidee',NULL,NULL,NULL,0,NULL,1),(2,'tul','$2a$10$l5AYANE9YZXeBLbfQ9Y3MuSVm1jHxztvMd.yXYNdBneKikZDDguvm','EEEEFDF','eadEEEE','eadEEE',1,'preview1725441103074.gif',1,'2024-09-15 14:35:57',1),(3,'ant','$2a$10$brsRfMcyZmxiTW9a.T/Q5udOOik0kG8a.Vhpctu109ziF1gsMB5yG','ant555','tna',NULL,NULL,'1726049193072_croppedImg1726049197337.jpg',0,NULL,1),(4,'por','$2a$10$p9ZJNMKajasS747I8zTSZ.l3UbnN7pQRZ25C.epYrDRrp5MBQ0UJG','porpor','papa',NULL,NULL,NULL,0,NULL,1),(5,'jet','$2a$10$De0ncXxHyoypPCF1LUxbIOYBiZ.lFTH2S9WUgupe59gf/V8N44FjS','','',NULL,NULL,NULL,0,NULL,1),(6,'tor','$2a$10$tK8kHoOVovbgCuLusjb7c.SxEpmPFibCVXjPKAQZD/k9LHGjQTCUe','yh','hyy',NULL,NULL,NULL,0,NULL,1),(7,'arm','$2a$10$ioIfSzgz2bweaD8uVtOKZ.AGuePK/fV79YKneVaWMEA0hmaVMO0k.','girl','asd',NULL,NULL,NULL,0,NULL,1),(8,'ccc','$2a$10$8F6Obh6iZuT0neJzX7MSyOVgnMaJs0M1sVN9x5vtxwmGzyaN/INsu','ccc','ccc',NULL,NULL,NULL,0,NULL,1),(9,'kkk','$2a$10$DkYRhQKMq0gcP1VQHWHnH.tTlyMpV6G.yFNVw8sC1omjvx6NfzUIi','kkk','kkk',NULL,NULL,NULL,0,NULL,1),(10,'fh','$2a$10$xWA4.aaFDkEX.n7bHYsqHuFAxUDU1nC2jYpv4Jni1VGac9sEz/lz2','fh','fh',NULL,NULL,NULL,0,NULL,1),(11,'dtac','$2a$10$k1le8/UDlIOpif4PM3b4Y.OwffbwINYJpiTTAY9H2vIFdUEs5ANy2','dtac','dtac',NULL,NULL,NULL,0,NULL,1);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `empID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `positionID` int NOT NULL,
  `loginAttempt` tinyint NOT NULL DEFAULT '0',
  `lastAttemptTime` timestamp NULL DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`empID`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'art','$2a$10$ioIfSzgz2bweaD8uVtOKZ.AGuePK/fV79YKneVaWMEA0hmaVMO0k.','gg','gg','gg',1,1,0,NULL,1),(2,'Jeff','$2a$10$W6mJrcCwMEJkDU4EvguGVOVjyD8ShHbOaEoOXow9nEIeA3Aqsm.Pa','fff','fff','fff',1,1,0,NULL,1),(3,'pp','$2a$10$Ml2AMHLxaW8SyeIhSxPIFOlo7CVzzHiU0Igd6U3rCLi8MlcLNUqqC','pp','pp','pp',3,2,2,'2024-09-17 03:48:33',1),(4,'tt','$2a$10$lVQB.ONqJ4U4wvGRYZgPR.tLUh9QvskseX6RlnyARAcSnxyvdbpQm','tt','tt','tt',3,3,1,'2024-09-17 03:50:45',1),(5,'ggggg','$2a$10$mffX/cIZXJ2xQd5GKwgdwu325JeT4R.L2VgbzudF6eobbsbGVz4IK','gg','gg','3',3,3,1,'2024-09-17 09:35:22',1),(6,'tg','$2a$10$MV9AFTyzMm/QjvsmdPfIPOuoSoePf1Pfo86MDskjIA7Pl50esFj1C','tg','tg','tg',2,1,0,NULL,1);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gender` (
  `genderID` int NOT NULL AUTO_INCREMENT,
  `genderName` varchar(50) NOT NULL,
  PRIMARY KEY (`genderID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender`
--

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` VALUES (1,'Male'),(2,'Female'),(3,'Other');
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `position` (
  `positionID` int NOT NULL AUTO_INCREMENT,
  `positionName` varchar(50) NOT NULL,
  PRIMARY KEY (`positionID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position`
--

LOCK TABLES `position` WRITE;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` VALUES (1,'Admin'),(2,'Employee'),(3,'Manager');
/*!40000 ALTER TABLE `position` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-17 19:06:44
