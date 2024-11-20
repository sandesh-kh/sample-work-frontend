/*

Modifier	Description	                                            Access Level
public	    Members are accessible from anywhere.	                Accessible inside the class, in instances, and anywhere in the codebase.
private	    Members are accessible only within the class.	        Accessible only within the class they are defined in. Cannot be accessed externally.
protected	Members are accessible within the class and subclasses.	Accessible within the class and its subclasses, but not outside of them.

Conclusion
Use public for members that need to be accessible from anywhere.
Use private for members that should only be used within the class itself.
Use protected for members that should be accessible within the class and any subclasses, but not from outside the class or its subclasses.

*/