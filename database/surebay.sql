-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2015 at 05:39 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `surebay`
--

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE IF NOT EXISTS `survey` (
`survey_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `userid` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `survey_question`
--

CREATE TABLE IF NOT EXISTS `survey_question` (
  `survey_id` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
`survey_question_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `survey_respondents`
--

CREATE TABLE IF NOT EXISTS `survey_respondents` (
  `survey_id` int(11) NOT NULL,
  `respondents` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user_account`
--

CREATE TABLE IF NOT EXISTS `user_account` (
`user_id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `user_type` tinyint(11) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_account`
--

INSERT INTO `user_account` (`user_id`, `username`, `password`, `user_type`, `status`) VALUES
(1, 'admin', '123', 1, 0),
(6, 'jaylord', '123', 1, 1);

-- --------------------------------------------------------

--
-- Stand-in structure for view `user_details`
--
CREATE TABLE IF NOT EXISTS `user_details` (
`user_id` int(11)
,`username` varchar(45)
,`user_type` tinyint(11)
,`status` tinyint(4)
,`firstname` varchar(45)
,`lastname` varchar(45)
,`email` varchar(45)
,`address` varchar(45)
,`birthday` date
);
-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE IF NOT EXISTS `user_profile` (
`user_id` int(11) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `birthday` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_profile`
--

INSERT INTO `user_profile` (`user_id`, `firstname`, `lastname`, `email`, `address`, `birthday`) VALUES
(1, 'Xan', 'Gutierrez', 'admin@gmail.com', 'Benoni, Mahinog, Camiguin', '1996-09-08');

-- --------------------------------------------------------

--
-- Structure for view `user_details`
--
DROP TABLE IF EXISTS `user_details`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `user_details` AS select `a`.`user_id` AS `user_id`,`a`.`username` AS `username`,`a`.`user_type` AS `user_type`,`a`.`status` AS `status`,`b`.`firstname` AS `firstname`,`b`.`lastname` AS `lastname`,`b`.`email` AS `email`,`b`.`address` AS `address`,`b`.`birthday` AS `birthday` from (`user_account` `a` join `user_profile` `b`) where (`b`.`user_id` = `a`.`user_id`);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
 ADD PRIMARY KEY (`survey_id`);

--
-- Indexes for table `survey_question`
--
ALTER TABLE `survey_question`
 ADD PRIMARY KEY (`survey_question_id`);

--
-- Indexes for table `user_account`
--
ALTER TABLE `user_account`
 ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
 ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `survey`
--
ALTER TABLE `survey`
MODIFY `survey_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `survey_question`
--
ALTER TABLE `survey_question`
MODIFY `survey_question_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user_account`
--
ALTER TABLE `user_account`
MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `user_profile`
--
ALTER TABLE `user_profile`
MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
