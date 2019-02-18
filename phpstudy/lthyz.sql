/*
Navicat MySQL Data Transfer

Source Server         : letian
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : lthyz

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-02-18 12:07:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `goodid` int(11) NOT NULL,
  `goodname` varchar(255) DEFAULT NULL,
  `goodname2` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `newprice` decimal(10,2) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `pfs` varchar(255) DEFAULT NULL,
  `dazhe` varchar(255) DEFAULT NULL,
  `biaoqian` varchar(255) DEFAULT NULL,
  `oldrmb` varchar(255) DEFAULT NULL,
  `newrmb` varchar(255) DEFAULT NULL,
  `daima` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '伊夫圣罗兰', 'SUAHDUAHSUDUH', '圣罗兰莹亮纯魅唇膏', '34.00', '34.00', 'hz1.jpg', '500', '无打折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag06\">现金积分</em>', '3,522.33', '3,522.33', '27290521');
INSERT INTO `goodlist` VALUES ('2', '汤姆·福特', 'XZCXZCZXAASA', 'EYE COLOR QUAD', '83.00', '83.00', 'hz2.jpg', '1010', '无打折', '<em class=\"flag flag03\">乐天免税</em><em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em>', '8,522.33', '8,522.33', '50290522');
INSERT INTO `goodlist` VALUES ('3', '欧缇丽', 'ASACXZC', '\"VINOPERFECT RADIANCE SERUM DUO 欧缇丽葡萄籽亮白精华液', '112.00', '106.00', 'hz3.jpg', '20', '7折', '<em class=\"flag flag01\">折扣</em>', '11,522.66', '10,022.54', '27229052');
INSERT INTO `goodlist` VALUES ('4', '资生堂', 'AWQWS', '                                                        30ml*2个 韩国免税店专售套装\"', '33.00', '31.00', 'hz4.jpg', '111', '9折', '<em class=\"flag flag01\">折扣</em>', '3,522.33', '3,122.32', '27250290524');
INSERT INTO `goodlist` VALUES ('5', '倩碧', 'JUAHA', '\"PERFECT UV SUNSCREEN SKINCARE MILK SPF50+', '56.00', '53.00', 'hz5.jpg', '2044', '7.5折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em><em class=\"flag flag01\">折扣</em>', '5,622.31', '5,222.77', '585754524');
INSERT INTO `goodlist` VALUES ('6', '雅诗兰黛', 'JUXZUA', '                                                        PA++++ 防晒霜\"', '128.00', '121.00', 'hz6.jpg', '212', '9折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag01\">折扣</em>', '13,222.45', '12,122.31', '272590526');
INSERT INTO `goodlist` VALUES ('7', '伊夫圣罗兰', 'SASZXZ', '滋润要素', '61.00', '57.00', 'hz7.jpg', '2442', '8.5折', '<em class=\"flag flag01\">折扣</em>', '6,522.31', '5,522.31', '27250290527');
INSERT INTO `goodlist` VALUES ('8', '科颜氏', 'QQWAS', '\"NUTRITIOUS SUPER-POMEGRANATE RADIANT ENERGY', '50.00', '47.00', 'hz8.jpg', '112', '8折', '<em class=\"flag flag01\">折扣</em>', '5,522.31', '4,522.35', '27250290528');
INSERT INTO `goodlist` VALUES ('9', '迪奥', 'WAWW', '                                                        CREME SET 面霜套装\"', '61.00', '57.00', 'hz9.jpg', '157', '9.5折', '<em class=\"flag flag01\">折扣</em>', '6,522.38', '5,922.51', '7250290529');
INSERT INTO `goodlist` VALUES ('10', '黛珂', 'AASS', '圣罗兰明彩无瑕轻垫气垫', '70.00', '66.00', 'hz10.jpg', '542', '7折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag01\">折扣</em>', '7,522.31', '6,822.55', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('11', '乔治•阿玛尼', 'AZXXZ', 'CREAMY EYE TREATMENT WITH AVOCADO 牛油果眼霜 28g', '34.00', '32.00', 'hz11.jpg', '121', '8折', '<em class=\"flag flag01\">折扣</em>', '3,522.31', '3,122.37', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('12', '海蓝之谜', 'AAASS', '\"DIOR ADDICT LIP GLOW DUO 迪奥魅惑唇膏套装 PINK AND', '160.00', '152.00', 'hz12.jpg', '212', '9折', '<em class=\"flag flag01\">折扣</em>', '17,522.88', '15,522.38', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('13', '珂丽柏蒂', 'ZXCZ', '                                                        CORAL\"', '60.00', '57.00', 'hz13.jpg', '111', '9折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em><em class=\"flag flag01\">折扣</em>', '6,522.31', '5,522.98', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('14', '汤姆·福特', 'SS', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '120.00', '100.00', 'hz14.jpg', '78', '8.5折', '<em class=\"flag flag01\">折扣</em>', '12,522.66', '10,522.85', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('15', '欧缇丽', 'XX', 'LIP MAESTRO 臻致丝绒哑光唇釉', '121.00', '77.00', 'hz15.jpg', '454', '9折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em><em class=\"flag flag01\">折扣</em>', '12,722.31', '7,522.63', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('16', '雅诗兰黛', 'LLL', '修护精萃液', '100.00', '55.00', 'hz16.jpg', '1', '9.5折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag01\">折扣</em>', '11,522.91', '5,522.47', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('17', '欧缇丽', 'ALLL', '\"Voile creme correcteur correcting cream veil', '78.00', '45.00', 'hz17.jpg', '212', '7折', '<em class=\"flag flag01\">折扣</em>', '8,522.31', '4,522.52', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('18', '欧缇丽', 'ASA', '                                                        隔离霜 40g\"', '585.00', '444.00', 'hz18.jpg', '212', '8.5折', '<em class=\"flag flag01\">折扣</em>', '61,522.46', '4,522.44', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('19', '珂丽柏蒂', 'ZXXZZ', '圣罗兰明彩无瑕轻垫气垫', '587.00', '457.00', 'hz19.jpg', '2', '9折', '<em class=\"flag flag01\">折扣</em>', '60,522.31', '46,522.74', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('20', '雅诗兰黛', 'ZXX', '圣罗兰明彩无瑕轻垫气垫', '8.00', '4.00', 'hz20.jpg', '2', '9折', '<em class=\"flag flag01\">折扣</em>', '922.39', '422.34', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('21', '雅诗兰黛', 'VBV', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '75.00', '21.00', 'hz21.jpg', '2', '9折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag01\">折扣</em>', '7,522.40', '2,522.31', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('22', '祖·玛珑伦敦', 'NBN', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '85.00', '77.00', 'hz22.jpg', '244', '8.5折', '<em class=\"flag flag01\">折扣</em>', '8,522.88', '75,522.77', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('23', '迪奥', 'NMN', '修护精萃液', '855.00', '844.00', 'hz23.jpg', '787', '8折', '<em class=\"flag flag01\">折扣</em>', '86,522.79', '81,522.99', '2.72503E+11');
INSERT INTO `goodlist` VALUES ('24', '珂丽柏蒂', 'NNBSSD', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '777.00', '711.00', 'hz24.jpg', '4', '9折', '<em class=\"flag flag03\">乐天免税</em><em class=\"flag flag07\">3小时前</em><em class=\"flag flag01\">折扣</em>', '79,522.31', '71,522.38', '2.72503E+11');

-- ----------------------------
-- Table structure for goodlist1
-- ----------------------------
DROP TABLE IF EXISTS `goodlist1`;
CREATE TABLE `goodlist1` (
  `goodid` int(11) NOT NULL,
  `goodname` varchar(255) DEFAULT NULL,
  `goodname2` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `newprice` decimal(10,2) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `pfs` varchar(255) DEFAULT NULL,
  `dazhe` varchar(255) DEFAULT NULL,
  `biaoqian` varchar(255) DEFAULT NULL,
  `oldrmb` varchar(255) DEFAULT NULL,
  `newrmb` varchar(255) DEFAULT NULL,
  `daima` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist1
-- ----------------------------
INSERT INTO `goodlist1` VALUES ('9', '迪奥', 'WAWW', '                                                        CREME SET 面霜套装\"', '61.00', '57.00', 'hz9.jpg', '157', '9.5折', '<em class=\"flag flag01\">折扣</em>', '6,522.38', '5,922.51', '7250290529');
INSERT INTO `goodlist1` VALUES ('16', '雅诗兰黛', 'LLL', '修护精萃液', '100.00', '55.00', 'hz16.jpg', '1', '9.5折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag01\">折扣</em>', '11,522.91', '5,522.47', '2.72503E+11');
INSERT INTO `goodlist1` VALUES ('17', '欧缇丽', 'ALLL', '\"Voile creme correcteur correcting cream veil', '78.00', '45.00', 'hz17.jpg', '212', '7折', '<em class=\"flag flag01\">折扣</em>', '8,522.31', '4,522.52', '2.72503E+11');
INSERT INTO `goodlist1` VALUES ('18', '欧缇丽', 'ASA', '                                                        隔离霜 40g\"', '585.00', '444.00', 'hz18.jpg', '212', '8.5折', '<em class=\"flag flag01\">折扣</em>', '61,522.46', '4,522.44', '2.72503E+11');
INSERT INTO `goodlist1` VALUES ('19', '珂丽柏蒂', 'ZXXZZ', '圣罗兰明彩无瑕轻垫气垫', '587.00', '457.00', 'hz19.jpg', '2', '9折', '<em class=\"flag flag01\">折扣</em>', '60,522.31', '46,522.74', '2.72503E+11');
INSERT INTO `goodlist1` VALUES ('20', '雅诗兰黛', 'ZXX', '圣罗兰明彩无瑕轻垫气垫', '8.00', '4.00', 'hz20.jpg', '2', '9折', '<em class=\"flag flag01\">折扣</em>', '922.39', '422.34', '2.72503E+11');
INSERT INTO `goodlist1` VALUES ('23', '迪奥', 'NMN', '修护精萃液', '855.00', '844.00', 'hz23.jpg', '787', '8折', '<em class=\"flag flag01\">折扣</em>', '86,522.79', '81,522.99', '2.72503E+11');
INSERT INTO `goodlist1` VALUES ('24', '珂丽柏蒂', 'NNBSSD', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '777.00', '711.00', 'hz24.jpg', '4', '9折', '<em class=\"flag flag03\">乐天免税</em><em class=\"flag flag07\">3小时前</em><em class=\"flag flag01\">折扣</em>', '79,522.31', '71,522.38', '2.72503E+11');

-- ----------------------------
-- Table structure for goodlist2
-- ----------------------------
DROP TABLE IF EXISTS `goodlist2`;
CREATE TABLE `goodlist2` (
  `goodid` int(11) NOT NULL,
  `goodname` varchar(255) DEFAULT NULL,
  `goodname2` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `newprice` decimal(10,2) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `pfs` varchar(255) DEFAULT NULL,
  `dazhe` varchar(255) DEFAULT NULL,
  `biaoqian` varchar(255) DEFAULT NULL,
  `oldrmb` varchar(255) DEFAULT NULL,
  `newrmb` varchar(255) DEFAULT NULL,
  `daima` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist2
-- ----------------------------
INSERT INTO `goodlist2` VALUES ('4', '资生堂', 'AWQWS', '                                                        30ml*2个 韩国免税店专售套装\"', '33.00', '31.00', 'hz4.jpg', '111', '9折', '<em class=\"flag flag01\">折扣</em>', '3,522.33', '3,122.32', '27250290524');
INSERT INTO `goodlist2` VALUES ('5', '倩碧', 'JUAHA', '\"PERFECT UV SUNSCREEN SKINCARE MILK SPF50+', '56.00', '53.00', 'hz5.jpg', '2044', '7.5折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em><em class=\"flag flag01\">折扣</em>', '5,622.31', '5,222.77', '585754524');
INSERT INTO `goodlist2` VALUES ('6', '雅诗兰黛', 'JUXZUA', '                                                        PA++++ 防晒霜\"', '128.00', '121.00', 'hz6.jpg', '212', '9折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag01\">折扣</em>', '13,222.45', '12,122.31', '272590526');
INSERT INTO `goodlist2` VALUES ('7', '伊夫圣罗兰', 'SASZXZ', '滋润要素', '61.00', '57.00', 'hz7.jpg', '2442', '8.5折', '<em class=\"flag flag01\">折扣</em>', '6,522.31', '5,522.31', '27250290527');
INSERT INTO `goodlist2` VALUES ('8', '科颜氏', 'QQWAS', '\"NUTRITIOUS SUPER-POMEGRANATE RADIANT ENERGY', '50.00', '47.00', 'hz8.jpg', '112', '8折', '<em class=\"flag flag01\">折扣</em>', '5,522.31', '4,522.35', '27250290528');
INSERT INTO `goodlist2` VALUES ('20', '雅诗兰黛', 'ZXX', '圣罗兰明彩无瑕轻垫气垫', '8.00', '4.00', 'hz20.jpg', '2', '9折', '<em class=\"flag flag01\">折扣</em>', '922.39', '422.34', '2.72503E+11');
INSERT INTO `goodlist2` VALUES ('21', '雅诗兰黛', 'VBV', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '75.00', '21.00', 'hz21.jpg', '2', '9折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag01\">折扣</em>', '7,522.40', '2,522.31', '2.72503E+11');
INSERT INTO `goodlist2` VALUES ('24', '珂丽柏蒂', 'NNBSSD', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '777.00', '711.00', 'hz24.jpg', '4', '9折', '<em class=\"flag flag03\">乐天免税</em><em class=\"flag flag07\">3小时前</em><em class=\"flag flag01\">折扣</em>', '79,522.31', '71,522.38', '2.72503E+11');

-- ----------------------------
-- Table structure for goodlist3
-- ----------------------------
DROP TABLE IF EXISTS `goodlist3`;
CREATE TABLE `goodlist3` (
  `goodid` int(11) NOT NULL,
  `goodname` varchar(255) DEFAULT NULL,
  `goodname2` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `newprice` decimal(10,2) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `pfs` varchar(255) DEFAULT NULL,
  `dazhe` varchar(255) DEFAULT NULL,
  `biaoqian` varchar(255) DEFAULT NULL,
  `oldrmb` varchar(255) DEFAULT NULL,
  `newrmb` varchar(255) DEFAULT NULL,
  `daima` varchar(255) DEFAULT NULL,
  `xh` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist3
-- ----------------------------
INSERT INTO `goodlist3` VALUES ('3', '欧缇丽', 'ASACXZC', '\"VINOPERFECT RADIANCE SERUM DUO 欧缇丽葡萄籽亮白精华液', '112.00', '106.00', 'hz3.jpg', '20', '7折', '<em class=\"flag flag01\">折扣</em>', '11,522.66', '10,022.54', '27229052', '2');
INSERT INTO `goodlist3` VALUES ('4', '资生堂', 'AWQWS', '                                                        30ml*2个 韩国免税店专售套装\"', '33.00', '31.00', 'hz4.jpg', '111', '9折', '<em class=\"flag flag01\">折扣</em>', '3,522.33', '3,122.32', '27250290524', '3');
INSERT INTO `goodlist3` VALUES ('5', '倩碧', 'JUAHA', '\"PERFECT UV SUNSCREEN SKINCARE MILK SPF50+', '56.00', '53.00', 'hz5.jpg', '2044', '7.5折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em><em class=\"flag flag01\">折扣</em>', '5,622.31', '5,222.77', '585754524', '4');
INSERT INTO `goodlist3` VALUES ('11', '乔治•阿玛尼', 'AZXXZ', 'CREAMY EYE TREATMENT WITH AVOCADO 牛油果眼霜 28g', '34.00', '32.00', 'hz11.jpg', '121', '8折', '<em class=\"flag flag01\">折扣</em>', '3,522.31', '3,122.37', '2.72503E+11', '5');

-- ----------------------------
-- Table structure for goodlist4
-- ----------------------------
DROP TABLE IF EXISTS `goodlist4`;
CREATE TABLE `goodlist4` (
  `goodid` int(11) NOT NULL,
  `goodname` varchar(255) DEFAULT NULL,
  `goodname2` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `newprice` decimal(10,2) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `pfs` varchar(255) DEFAULT NULL,
  `dazhe` varchar(255) DEFAULT NULL,
  `biaoqian` varchar(255) DEFAULT NULL,
  `oldrmb` varchar(255) DEFAULT NULL,
  `newrmb` varchar(255) DEFAULT NULL,
  `daima` varchar(255) DEFAULT NULL,
  `xh` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist4
-- ----------------------------
INSERT INTO `goodlist4` VALUES ('2', '汤姆·福特', 'XZCXZCZXAASA', 'EYE COLOR QUAD', '83.00', '83.00', 'hz2.jpg', '1010', '无打折', '<em class=\"flag flag03\">乐天免税</em><em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em>', '8,522.33', '8,522.33', '50290522', '6');
INSERT INTO `goodlist4` VALUES ('3', '欧缇丽', 'ASACXZC', '\"VINOPERFECT RADIANCE SERUM DUO 欧缇丽葡萄籽亮白精华液', '112.00', '106.00', 'hz3.jpg', '20', '7折', '<em class=\"flag flag01\">折扣</em>', '11,522.66', '10,022.54', '27229052', '7');
INSERT INTO `goodlist4` VALUES ('10', '黛珂', 'AASS', '圣罗兰明彩无瑕轻垫气垫', '70.00', '66.00', 'hz10.jpg', '542', '7折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag01\">折扣</em>', '7,522.31', '6,822.55', '2.72503E+11', '8');
INSERT INTO `goodlist4` VALUES ('11', '乔治•阿玛尼', 'AZXXZ', 'CREAMY EYE TREATMENT WITH AVOCADO 牛油果眼霜 28g', '34.00', '32.00', 'hz11.jpg', '121', '8折', '<em class=\"flag flag01\">折扣</em>', '3,522.31', '3,122.37', '2.72503E+11', '9');
INSERT INTO `goodlist4` VALUES ('13', '珂丽柏蒂', 'ZXCZ', '                                                        CORAL\"', '60.00', '57.00', 'hz13.jpg', '111', '9折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em><em class=\"flag flag01\">折扣</em>', '6,522.31', '5,522.98', '2.72503E+11', '10');
INSERT INTO `goodlist4` VALUES ('14', '汤姆·福特', 'SS', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '120.00', '100.00', 'hz14.jpg', '78', '8.5折', '<em class=\"flag flag01\">折扣</em>', '12,522.66', '10,522.85', '2.72503E+11', '11');

-- ----------------------------
-- Table structure for goodlist5
-- ----------------------------
DROP TABLE IF EXISTS `goodlist5`;
CREATE TABLE `goodlist5` (
  `goodid` int(11) NOT NULL,
  `goodname` varchar(255) DEFAULT NULL,
  `goodname2` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `newprice` decimal(10,2) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `pfs` varchar(255) DEFAULT NULL,
  `dazhe` varchar(255) DEFAULT NULL,
  `biaoqian` varchar(255) DEFAULT NULL,
  `oldrmb` varchar(255) DEFAULT NULL,
  `newrmb` varchar(255) DEFAULT NULL,
  `daima` varchar(255) DEFAULT NULL,
  `xh` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist5
-- ----------------------------
INSERT INTO `goodlist5` VALUES ('17', '欧缇丽', 'ALLL', '\"Voile creme correcteur correcting cream veil', '78.00', '45.00', 'hz17.jpg', '212', '7折', '<em class=\"flag flag01\">折扣</em>', '8,522.31', '4,522.52', '2.72503E+11', '6');
INSERT INTO `goodlist5` VALUES ('18', '欧缇丽', 'ASA', '                                                        隔离霜 40g\"', '585.00', '444.00', 'hz18.jpg', '212', '8.5折', '<em class=\"flag flag01\">折扣</em>', '61,522.46', '4,522.44', '2.72503E+11', '7');
INSERT INTO `goodlist5` VALUES ('19', '珂丽柏蒂', 'ZXXZZ', '圣罗兰明彩无瑕轻垫气垫', '587.00', '457.00', 'hz19.jpg', '2', '9折', '<em class=\"flag flag01\">折扣</em>', '60,522.31', '46,522.74', '2.72503E+11', '8');
INSERT INTO `goodlist5` VALUES ('22', '祖·玛珑伦敦', 'NBN', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '85.00', '77.00', 'hz22.jpg', '244', '8.5折', '<em class=\"flag flag01\">折扣</em>', '8,522.88', '75,522.77', '2.72503E+11', '9');
INSERT INTO `goodlist5` VALUES ('23', '迪奥', 'NMN', '修护精萃液', '855.00', '844.00', 'hz23.jpg', '787', '8折', '<em class=\"flag flag01\">折扣</em>', '86,522.79', '81,522.99', '2.72503E+11', '10');
INSERT INTO `goodlist5` VALUES ('24', '珂丽柏蒂', 'NNBSSD', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '777.00', '711.00', 'hz24.jpg', '4', '9折', '<em class=\"flag flag03\">乐天免税</em><em class=\"flag flag07\">3小时前</em><em class=\"flag flag01\">折扣</em>', '79,522.31', '71,522.38', '2.72503E+11', '11');

-- ----------------------------
-- Table structure for goodlist6
-- ----------------------------
DROP TABLE IF EXISTS `goodlist6`;
CREATE TABLE `goodlist6` (
  `goodid` int(11) NOT NULL,
  `goodname` varchar(255) DEFAULT NULL,
  `goodname2` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `newprice` decimal(10,2) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `pfs` varchar(255) DEFAULT NULL,
  `dazhe` varchar(255) DEFAULT NULL,
  `biaoqian` varchar(255) DEFAULT NULL,
  `oldrmb` varchar(255) DEFAULT NULL,
  `newrmb` varchar(255) DEFAULT NULL,
  `daima` varchar(255) DEFAULT NULL,
  `xh` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist6
-- ----------------------------
INSERT INTO `goodlist6` VALUES ('6', '雅诗兰黛', 'JUXZUA', '                                                        PA++++ 防晒霜\"', '128.00', '121.00', 'hz6.jpg', '212', '9折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag01\">折扣</em>', '13,222.45', '12,122.31', '272590526', '6');
INSERT INTO `goodlist6` VALUES ('7', '伊夫圣罗兰', 'SASZXZ', '滋润要素', '61.00', '57.00', 'hz7.jpg', '2442', '8.5折', '<em class=\"flag flag01\">折扣</em>', '6,522.31', '5,522.31', '27250290527', '7');
INSERT INTO `goodlist6` VALUES ('12', '海蓝之谜', 'AAASS', '\"DIOR ADDICT LIP GLOW DUO 迪奥魅惑唇膏套装 PINK AND', '160.00', '152.00', 'hz12.jpg', '212', '9折', '<em class=\"flag flag01\">折扣</em>', '17,522.88', '15,522.38', '2.72503E+11', '8');
INSERT INTO `goodlist6` VALUES ('13', '珂丽柏蒂', 'ZXCZ', '                                                        CORAL\"', '60.00', '57.00', 'hz13.jpg', '111', '9折', '<em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em><em class=\"flag flag01\">折扣</em>', '6,522.31', '5,522.98', '2.72503E+11', '9');
INSERT INTO `goodlist6` VALUES ('14', '汤姆·福特', 'SS', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '120.00', '100.00', 'hz14.jpg', '78', '8.5折', '<em class=\"flag flag01\">折扣</em>', '12,522.66', '10,522.85', '2.72503E+11', '10');
INSERT INTO `goodlist6` VALUES ('24', '珂丽柏蒂', 'NNBSSD', 'SUN SHELTER MULTI PROTECTION DUO 多重防御隔离乳 套装', '777.00', '711.00', 'hz24.jpg', '4', '9折', '<em class=\"flag flag03\">乐天免税</em><em class=\"flag flag07\">3小时前</em><em class=\"flag flag01\">折扣</em>', '79,522.31', '71,522.38', '2.72503E+11', '11');

-- ----------------------------
-- Table structure for shopping
-- ----------------------------
DROP TABLE IF EXISTS `shopping`;
CREATE TABLE `shopping` (
  `goodid` int(11) DEFAULT NULL,
  `goodname` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `oldprice` decimal(10,2) DEFAULT NULL,
  `newprice` decimal(10,2) DEFAULT NULL,
  `biaoqian` varchar(255) DEFAULT NULL,
  `goodname2` varchar(255) DEFAULT NULL,
  `daima` varchar(255) DEFAULT NULL,
  `dazhe` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `goodnum` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopping
-- ----------------------------
INSERT INTO `shopping` VALUES ('1', '伊夫圣罗兰', '圣罗兰莹亮纯魅唇膏', '34.00', '34.00', '\n                                    <em class=\"flag flag07\">3小时前</em><em class=\"flag flag03\">乐天免税</em><em class=\"flag flag06\">现金积分</em>\n                                ', 'SUAHDUAHSUDUH', '27290521', '无打折', 'hz1.jpg', '2');
INSERT INTO `shopping` VALUES ('5', '倩碧', '\"PERFECT UV SUNSCREEN SKINCARE MILK SPF50+', '56.00', '53.00', '\n                                    <em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em><em class=\"flag flag01\">折扣</em>\n                                ', 'JUAHA', '585754524', '7.5折', 'hz5.jpg', '1');
INSERT INTO `shopping` VALUES ('4', '资生堂', '                                                        30ml*2个 韩国免税店专售套装\"', '33.00', '31.00', '\n                                    <em class=\"flag flag01\">折扣</em>\n                                ', 'AWQWS', '27250290524', '9折', 'hz4.jpg', '1');
INSERT INTO `shopping` VALUES ('7', '伊夫圣罗兰', '滋润要素', '61.00', '57.00', '\n                                    <em class=\"flag flag01\">折扣</em>\n                                ', 'SASZXZ', '27250290527', '8.5折', 'hz7.jpg', '1');
INSERT INTO `shopping` VALUES ('2', '汤姆·福特', 'EYE COLOR QUAD', '83.00', '83.00', '\n                                    <em class=\"flag flag03\">乐天免税</em><em class=\"flag flag07\">3小时前</em><em class=\"flag flag06\">现金积分</em>\n                                ', 'XZCXZCZXAASA', '50290522', '无打折', 'hz2.jpg', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'aa', '123456');
INSERT INTO `user` VALUES ('2', 'bb', '123456');
SET FOREIGN_KEY_CHECKS=1;
