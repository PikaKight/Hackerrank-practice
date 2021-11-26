package HackerEarth.CodeMonk;

import java.util.Scanner;

class MonkAndRotation{
    static Scanner in = new Scanner(System.in);

    public static void main(String[] args){
        int testCase = in.nextInt();


        do{
            int arrSize = in.nextInt();
            int roatation = in.nextInt();

            int[] arr = new int[arrSize];

            for (int i=0; i < arrSize; i++){
                arr[i] = in.nextInt();
            }
            
            int[] arrRotation = new int[arrSize];

            for (int j=arrSize; j>0; j--){
                int index = (j + 2)   
            }
                
            testCase--;
        } while (testCase <= 0);

    }
}