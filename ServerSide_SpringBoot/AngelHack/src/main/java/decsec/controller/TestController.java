package decsec.controller;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.InputStreamReader;

import org.python.core.PyFile;
import org.python.core.PyObject;
import org.python.modules.cPickle;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import decsec.constant.Constant;
import decsec.form.SubmitForm;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class TestController {
	
	@PostMapping("/get-score")
	public ResponseEntity<String> getScore(@RequestBody SubmitForm form){
		
		String realResult = "";
		
		try{
			 
			ProcessBuilder pb = new ProcessBuilder("python", Constant.PYTHON_FILE_PATH,
					form.getAppSex(), form.getHasRefType(), form.getEducation(), form.getAppWperiodg(), form.getFamilyStatus(),
					form.getPrimaryIncome(), form.getBasicExpences(), Constant.MODEL_FILE_PATH);
	
			Process p = pb.start();
			p.waitFor();
			BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
			String line;
			
			while((line = in.readLine()) != null) {
				realResult += line + " ";
			}
			}catch(Exception e){System.out.println(e);}
			
		
		return new ResponseEntity<>(realResult, HttpStatus.OK);
	}
	
}
