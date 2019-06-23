from sklearn.linear_model import LogisticRegression
import pickle
import sys


def main():
    analysis(1, 0, 0, 0, 0, 12000000, 0, 'model.sav')


def analysis(AppSex, Has_Ref_Type4, AppEducation, AppWPeriodg, AppFamilyStatus, PrimaryIncome, BasicExpences, ModelFilePath):
    model = pickle.load(open(ModelFilePath, 'rb'))
    l=[]
    X_test = []
    X_test.append(float(AppSex))
    X_test.append(float(Has_Ref_Type4))
    X_test.append(float(AppEducation))
    X_test.append(float(AppWPeriodg))
    X_test.append(float(AppFamilyStatus))
    X_test.append(float(PrimaryIncome))
    X_test.append(float(BasicExpences))

    l.append(X_test)

    prediction = model.predict(l)
    for i in prediction:
        print(i)
		
analysis(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6],sys.argv[7],sys.argv[8])