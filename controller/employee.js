const Employee = require("../model/employeStructure");

const insertMany = async (req, res) => {
  const data = req.body;
  const result = await Employee.insertMany(data);

  return res.send({ msg: " many data inserted", res: result });
};

const experience = async (req, res) => {
  const data = await Employee.find({ overallExp: { $gte: "2" } }).toArray();
  res.send(data);
};
const insert = async (req, res) => {
  try {
    // const detail = req.body;
    const {
      firstName,
      lastName,
      salary,
      department,
      lastCompany,
      lastSalary,
      overallExp,
      contactInfo,
      yearGrad,
      gradStream,
    } = req.body;

    const user = await Employee.findOne({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
      department: department,
      lastCompany: lastCompany,
      lastSalary: lastSalary,
      overallExp: overallExp,
      contactInfo: contactInfo,
      gradStream: gradStream,
    });
    if (user) {
      return res.send({ msg: "Similar Data Exists!" });
    }

    const result = await Employee.create({
      firstName,
      lastName,
      salary,
      department,
      lastCompany,
      lastSalary,
      overallExp,
      contactInfo,
      yearGrad,
      gradStream,
    });
    res.send({ msg: "data inserted", result: result });
  } catch (err) {
    console.log("Error while inserting", err);
  }
};

const fetchdata = async (req, res) => {
  const result = await Employee.find();
  return res.send({ msg: "Data Fetched", Result: result });
};

const deletedata = async (req, res) => {
  const { firstName } = req.body;
  const result = await Employee.deleteOne({ firstName: firstName });
  return res.send({ msg: "Data Deleted", Result: result });
};

//using query
const fetchStream = async (req, res) => {
  const { gradStream } = req.query;

  console.log(gradStream);
  const result = await Employee.find({ gradStream: gradStream });
  return res.send({ msg: "Data Fetched for " + gradStream, Result: result });
};

const fetchStreamParams = async (req, res) => {
  const { yearGrad } = req.params;
  console.log(yearGrad);
  const result = await Employee.find({ yearGrad: yearGrad });
  return res.send({ msg: "Data Fetched for " + yearGrad, Result: result });
};

const salary = async (req, res) => {
  const data = await Employee.find({ salary: { $gt: "30000" } });
  res.send(data);
};
const graduated = async (req, res) => {
  const data = await Employee.find({
    yearGrad: { $gt: 2015 },
    overallExp: { $gt: 1 },
  });
  res.send(data);
};

const salarybetween = async (req, res) => {
  const data = await Employee.find({
    salary: { $gte: "30000", $lte: "70000" },
  });
  res.send(data);
};

const deletesome = async (req, res) => {
  const data = await Employee.deleteMany({ lastCompany: "Y" });
  res.send(data);
};

module.exports = {
  insert,
  //handson
  insertMany,
  experience,
  salary,
  graduated,
  salarybetween,
  deletesome,

  //end
  fetchdata,
  deletedata,
  fetchStream,
  fetchStreamParams,
};
