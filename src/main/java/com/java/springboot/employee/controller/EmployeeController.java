package com.java.springboot.employee.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.java.springboot.employee.exception.EmployeeNotFoundException;
import com.java.springboot.employee.model.Employee;
import com.java.springboot.employee.repository.EmployeeRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository ;

	@PostMapping("/employee")	Employee newEmployee(@RequestBody Employee newEmployee) {
	return 	 employeeRepository.save(newEmployee);
		 
	}
	@GetMapping("/employees")
	List<Employee> getEmployees(){
		return  employeeRepository.findAll();
	}
	@GetMapping("/employee/{id}")
	Employee getEmployeeById(@PathVariable Long id) {
		return employeeRepository.findById(id)
		.orElseThrow(()-> new EmployeeNotFoundException(id));
		
	}
	@PutMapping("/employee/{id}")
	Employee updateEmployee(@RequestBody Employee newEmployee,@PathVariable Long id) {
		return employeeRepository.findById(id)
				.map(employee -> {
			     employee.setAddress(newEmployee.getAddress());
			     employee.setName(newEmployee.getName());
			     employee.setEmail(newEmployee.getEmail());
			     employee.setContact(newEmployee.getContact());
			     employee.setNational_id(newEmployee.getNational_id());
			     
			     return  employeeRepository.save(employee);
		}).orElseThrow(()-> new EmployeeNotFoundException(id));
	}

	@DeleteMapping("/employee/{id}")
	String deleteEmployee(@PathVariable Long id) {
		if(!employeeRepository.existsById(id)) {
			throw new EmployeeNotFoundException(id);
		}
		employeeRepository.deleteById(id);
		return "Employee with id "+id +" has been deleted successfully";
		}
}
