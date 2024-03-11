<?php

namespace App\Livewire;

use Livewire\Component;

class Welcome extends Component
{
    public function render()
    {
        return view('livewire.welcome', ['title' => 'Welcome to My page']);
    }
}
