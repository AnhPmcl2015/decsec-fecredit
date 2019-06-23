package decsec.form;

public class SubmitForm {
	private String appSex;
	private String hasRefType;
	private String education;
	private String appWperiodg;
	private String familyStatus;
	private String primaryIncome;
	private String basicExpences;

	public SubmitForm(String appSex, String hasRefType, String education, String appWperiodg, String familyStatus,
			String primaryIncome, String basicExpences) {
		super();
		this.appSex = appSex;
		this.hasRefType = hasRefType;
		this.education = education;
		this.appWperiodg = appWperiodg;
		this.familyStatus = familyStatus;
		this.primaryIncome = primaryIncome;
		this.basicExpences = basicExpences;
	}

	public SubmitForm() {
		super();
	}

	public String getAppSex() {
		return appSex;
	}

	public void setAppSex(String appSex) {
		this.appSex = appSex;
	}

	public String getHasRefType() {
		return hasRefType;
	}

	public void setHasRefType(String hasRefType) {
		this.hasRefType = hasRefType;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getAppWperiodg() {
		return appWperiodg;
	}

	public void setAppWperiodg(String appWperiodg) {
		this.appWperiodg = appWperiodg;
	}

	public String getFamilyStatus() {
		return familyStatus;
	}

	public void setFamilyStatus(String familyStatus) {
		this.familyStatus = familyStatus;
	}

	public String getPrimaryIncome() {
		return primaryIncome;
	}

	public void setPrimaryIncome(String primaryIncome) {
		this.primaryIncome = primaryIncome;
	}

	public String getBasicExpences() {
		return basicExpences;
	}

	public void setBasicExpences(String basicExpences) {
		this.basicExpences = basicExpences;
	}

}
