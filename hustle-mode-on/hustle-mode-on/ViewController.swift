//
//  ViewController.swift
//  hustle-mode-on
//
//  Created by Orlando Grant on 12/31/17.
//  Copyright © 2017 Orlando Grant. All rights reserved.
//

import UIKit
import AVFoundation

class ViewController: UIViewController {

    @IBOutlet weak var Darkbluebg: UIImageView!
    @IBOutlet weak var powerbtn: UIButton!
    @IBOutlet weak var cloudholder: UIView!
    @IBOutlet weak var rocket: UIImageView!
    @IBOutlet weak var hustlelbl: UILabel!
    @IBOutlet weak var onlbl: UILabel!
    
    var player: AVAudioPlayer!
    
    override func viewDidLoad() {
        super.viewDidLoad()
       
        let path = Bundle.main.path(forResource: "hustle-on", ofType:"wav")!
        let url = URL(fileURLWithPath: path)
        do{
            player = try AVAudioPlayer(contentsOf: url)
            player.prepareToPlay()
        } catch let error as NSError {
            print(error.description)
        }
        
        
        
    }

    @IBAction func Powerbtnpressed(_ sender: Any) {
        cloudholder.isHidden = false
        Darkbluebg.isHidden = true
        powerbtn.isHidden = true
        
        player.play()
        
        UIView.animate(withDuration: 2.3, animations: {
            self.rocket.frame = CGRect(x: 0, y: 150, width: 359, height: 373)
        }) { (finished) in
                self.hustlelbl.isHidden = false
                self.onlbl.isHidden = false
          }
        
            
        }
    


}

