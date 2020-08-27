describe("test payments", function() {
	beforeEach(function() {
		billAmtInput.value = 50;
		tipAmtInput.value = 10;
	});
	it("should create a new object in allPayments", function() {
		submitPaymentInfo();

		expect(Object.keys(allPayments).length).toEqual(1);
		expect(allPayments["payment1"].billAmt).toEqual("50");
		expect(allPayments["payment1"].tipAmt).toEqual("10");
		expect(allPayments["payment1"].tipPercent).toEqual(20);
	});
	it("should not create a new object in allPayments with no input", function() {
		billAmtInput.value = "";
		tipAmtInput.value = "";
		expect(Object.keys(allPayments).length).toEqual(0);
	});
	it("should append the payment table with correct values", function() {
		appendPaymentTable(createCurPayment());
		let paymentData = document.querySelectorAll("#paymentTable tbody tr td");
		expect(paymentData.length).toEqual(3);
		expect(paymentData[0].innerText).toEqual("$50");
		expect(paymentData[1].innerText).toEqual("$10");
		expect(paymentData[2].innerText).toEqual("20%");
	});

	it("should create a new payment with createCurrentPayment()", function() {
		let newPayment = {
			billAmt: "50",
			tipAmt: "10",
			tipPercent: 20
		};
		expect(createCurPayment()).toEqual(newPayment);
	});
	it("should not create a new payment with empty values", function() {
		billAmtInput.value = "";
		tipAmtInput.value = "";

		expect(createCurPayment()).toEqual(undefined);
	});
	afterEach(function() {
		allPayments = {};
		paymentId = 0;
		billAmtInput.value = "";
		tipAmtInput.value = "";
		paymentTbody.innerHTML = "";
		summaryTds[0].innerHTML = "";
		summaryTds[1].innerHTML = "";
		summaryTds[2].innerHTML = "";
	});
});
